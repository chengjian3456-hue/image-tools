#!/usr/bin/env node
// API密钥配置向导
// 帮助用户配置SERP API和AI API密钥

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONFIG_FILE = path.join(__dirname, '../.seo-config.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  console.log('🔧 SEO自动化运营 - API密钥配置向导\n');
  console.log('='.repeat(60));
  console.log('此向导将帮助你配置以下API密钥:');
  console.log('  1. SERP API - 用于关键词排名监控');
  console.log('  2. OpenAI API 或 Claude API - 用于自动生成文章');
  console.log('='.repeat(60));
  console.log('');

  const config = {
    targetDomain: 'onlineimagetools.xyz',
    keywords: [
      { keyword: 'free image resizer online', url: 'https://onlineimagetools.xyz/tools/image-resizer' },
      { keyword: 'HEIC to JPG converter free', url: 'https://onlineimagetools.xyz/tools/heic-to-jpg' },
      { keyword: 'compress image online free', url: 'https://onlineimagetools.xyz/tools/image-compressor' },
      { keyword: 'remove background from image free', url: 'https://onlineimagetools.xyz/tools/background-remover' },
      { keyword: 'WebP to PNG converter online', url: 'https://onlineimagetools.xyz/tools/webp-to-png' },
    ],
  };

  // ==================== 配置SERP API ====================
  console.log('\n📊 步骤1: 配置SERP API (关键词排名监控)');
  console.log('   注册地址: <ADDRESS_REDACTED>
  console.log('   免费额度: 100次/月');
  console.log('');
  
  const serpApiKey = await question('请输入SERP API密钥 (留空跳过): ');
  if (serpApiKey.trim()) {
    config.serpApiKey = serpApiKey.trim();
    console.log('✅ SERP API密钥已保存');
  } else {
    console.log('⚠️  跳过SERP API配置');
    config.serpApiKey = '';
  }

  // ==================== 配置AI API ====================
  console.log('\n🤖 步骤2: 配置AI API (自动生成文章)');
  console.log('   选项1: OpenAI API (推荐)');
  console.log('     注册地址: <ADDRESS_REDACTED>
  console.log('   选项2: Claude API');
  console.log('     注册地址: <ADDRESS_REDACTED>
  console.log('');

  const aiProvider = await question('选择AI提供商 (openai/claude, 默认openai): ');
  config.aiProvider = aiProvider.trim() || 'openai';

  if (config.aiProvider === 'openai') {
    console.log('\n   获取OpenAI API密钥: https://platform.openai.com/');
    const openaiKey = await question('请输入OpenAI API密钥 (sk-开头): ');
    if (openaiKey.trim()) {
      config.aiApiKey = openaiKey.trim();
      console.log('✅ OpenAI API密钥已保存');
    }
  } else if (config.aiProvider === 'claude') {
    console.log('\n   获取Claude API密钥: https://console.anthropic.com/');
    const claudeKey = await question('请输入Claude API密钥: ');
    if (claudeKey.trim()) {
      config.aiApiKey = claudeKey.trim();
      console.log('✅ Claude API密钥已保存');
    }
  }

  // ==================== 保存配置 ====================
  console.log('\n💾 保存配置...');
  
  // 如果已存在配置，合并
  if (fs.existsSync(CONFIG_FILE)) {
    const existing = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    config.keywords = existing.keywords || config.keywords;
  }
  
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
  console.log(`✅ 配置已保存到: ${CONFIG_FILE}`);

  // ==================== 测试配置 ====================
  console.log('\n🧪 测试配置...');

  if (config.serpApiKey) {
    console.log('   ✓ SERP API密钥已配置');
    console.log('     运行测试: node scripts/check-keyword-ranking.js');
  } else {
    console.log('   ⚠️  SERP API密钥未配置（关键词排名监控将不可用）');
  }

  if (config.aiApiKey) {
    console.log('   ✓ AI API密钥已配置');
    console.log('     运行测试: node scripts/generate-blog-post.js');
  } else {
    console.log('   ⚠️  AI API密钥未配置（自动文章生成将不可用）');
  }

  // ==================== 下一步 ====================
  console.log('\n📋 下一步:');
  console.log('   1. 测试脚本:');
  console.log('      node scripts/check-keyword-ranking.js');
  console.log('      node scripts/generate-blog-post.js');
  console.log('');
  console.log('   2. 设置定时任务:');
  console.log('      打开 "任务计划程序"');
  console.log('      导入 tasks/SEO-Automation-Task.xml');
  console.log('');
  console.log('   3. 查看文档:');
  console.log('      打开 docs/SEO-AUTOMATION-GUIDE.md');
  console.log('');

  rl.close();
}

main().catch(console.error);
