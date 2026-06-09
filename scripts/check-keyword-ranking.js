#!/usr/bin/env node
// 关键词排名监控脚本 - 使用SERP API检查Google排名
// 需要配置: SERP_API_KEY (从 https://serpapi.com/ 获取，免费100次/月)

const fs = require('fs');
const https = require('https');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '../.seo-config.json');
const LOG_FILE = path.join(__dirname, '../keyword-ranking-log.json');

// 默认配置
const DEFAULT_CONFIG = {
  serpApiKey: process.env.SERP_API_KEY || '',
  keywords: [
    { keyword: 'free image resizer online', url: 'https://onlineimagetools.xyz/tools/image-resizer' },
    { keyword: 'HEIC to JPG converter free', url: 'https://onlineimagetools.xyz/tools/heic-to-jpg' },
    { keyword: 'compress image online free', url: 'https://onlineimagetools.xyz/tools/image-compressor' },
    { keyword: 'remove background from image free', url: 'https://onlineimagetools.xyz/tools/background-remover' },
    { keyword: 'WebP to PNG converter online', url: 'https://onlineimagetools.xyz/tools/webp-to-png' },
    { keyword: 'bulk image resizer free', url: 'https://onlineimagetools.xyz/tools/image-resizer' },
  ],
  targetDomain: 'onlineimagetools.xyz',
};

// 加载配置
function loadConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    return { ...DEFAULT_CONFIG, ...config };
  }
  return DEFAULT_CONFIG;
}

// 保存配置
function saveConfig(config) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

// 使用SERP API检查关键词排名
async function checkKeywordRanking(keyword, apiKey) {
  return new Promise((resolve, reject) => {
    const query = encodeURIComponent(keyword);
    const url = `https://serpapi.com/search?api_key=${apiKey}&q=${query}&num=100`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const organicResults = result.organic_results || [];
          
          // 查找我们的网站在搜索结果中的位置
          let position = -1;
          let foundUrl = '';
          
          for (let i = 0; i < organicResults.length; i++) {
            const result = organicResults[i];
            if (result.link && result.link.includes(config.targetDomain)) {
              position = i + 1;
              foundUrl = result.link;
              break;
            }
          }
          
          resolve({
            keyword,
            position,
            foundUrl,
            totalResults: organicResults.length,
            timestamp: new Date().toISOString(),
          });
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// 主函数
async function main() {
  console.log('🔍 开始关键词排名监控...\n');
  
  const config = loadConfig();
  
  if (!config.serpApiKey) {
    console.error('❌ 错误: 未配置SERP API密钥！');
    console.log('\n请执行以下步骤:');
    console.log('1. 访问 https://serpapi.com/ 注册账号（免费100次/月）');
    console.log('2. 获取API密钥');
    console.log('3. 运行: node scripts/setup-api-keys.js');
    console.log('\n或者设置环境变量: set SERP_API_KEY=你的密钥');
    process.exit(1);
  }
  
  const results = [];
  
  for (const item of config.keywords) {
    console.log(`检查关键词: "${item.keyword}"`);
    
    try {
      const result = await checkKeywordRanking(item.keyword, config.serpApiKey);
      results.push(result);
      
      if (result.position > 0) {
        console.log(`  ✓ 排名: 第 ${result.position} 位`);
        console.log(`    网址: ${result.foundUrl}`);
      } else {
        console.log(`  ✗ 未在前100名中找到`);
      }
    } catch (error) {
      console.error(`  ✗ 检查失败: ${error.message}`);
      results.push({
        keyword: item.keyword,
        position: -1,
        error: error.message,
        timestamp: new Date().toISOString(),
      });
    }
    
    // 避免API速率限制
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // 保存结果
  const logData = {
    lastCheck: new Date().toISOString(),
    results,
  };
  
  fs.writeFileSync(LOG_FILE, JSON.stringify(logData, null, 2));
  console.log(`\n✅ 结果已保存到: ${LOG_FILE}`);
  
  // 生成报告
  console.log('\n📊 排名报告:');
  console.log('='.repeat(60));
  for (const result of results) {
    if (result.position > 0) {
      console.log(`  ${result.keyword}: 第 ${result.position} 位 ✓`);
    } else if (result.error) {
      console.log(`  ${result.keyword}: 检查失败 (${result.error})`);
    } else {
      console.log(`  ${result.keyword}: 未进入前100名`);
    }
  }
  console.log('='.repeat(60));
}

// 运行
main().catch(console.error);
