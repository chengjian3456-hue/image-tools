#!/usr/bin/env node
// 自动生成SEO优化博客文章脚本
// 使用AI API（OpenAI/Claude）生成高质量博客文章

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CONFIG_FILE = path.join(__dirname, '../.seo-config.json');
const BLOG_DIR = path.join(__dirname, '../src/app/blog');

// 默认配置
const DEFAULT_CONFIG = {
  aiProvider: 'openai', // 'openai' 或 'claude'
  aiApiKey: process.env.OPENAI_API_KEY || '',
  serpApiKey: process.env.SERP_API_KEY || '',
  targetDomain: 'onlineimagetools.xyz',
};

// 文章主题库
const ARTICLE_TOPICS = [
  {
    slug: 'free-image-resizer-online-guide',
    keyword: 'free image resizer online',
    title: 'Free Image Resizer Online: Complete Guide 2026',
    description: 'Learn how to resize images online for free without uploading to servers. Complete guide with tips and best tools.',
  },
  {
    slug: 'heic-to-jpg-converter-free-guide',
    keyword: 'HEIC to JPG converter free',
    title: 'HEIC to JPG Converter Free: Complete Guide for iPhone Users',
    description: 'Convert HEIC to JPG free online. No software needed. Complete guide for Windows, Mac, and iPhone users.',
  },
  {
    slug: 'compress-images-for-web-speed',
    keyword: 'compress image online free',
    title: 'How to Compress Images for Web Speed (Without Losing Quality)',
    description: 'Complete guide to image compression for faster websites. Tools, tips, and best practices.',
  },
  {
    slug: 'remove-background-tools-comparison',
    keyword: 'remove background from image free',
    title: '5 Best Free Background Remover Tools (2026 Comparison)',
    description: 'Compare the best free background remover tools. Find the right one for your needs.',
  },
  {
    slug: 'webp-vs-jpeg-which-is-better',
    keyword: 'WebP to PNG converter',
    title: 'WebP vs JPEG vs PNG: Which Image Format Is Best?',
    description: 'Complete comparison of WebP, JPEG, and PNG. When to use each format for best results.',
  },
];

// 使用OpenAI API生成文章
async function generateWithOpenAI(keyword, title, description) {
  const prompt = `Write a comprehensive SEO-optimized blog post about "${keyword}".

Title: ${title}
Meta Description: ${description}

Requirements:
1. Length: 1500-2000 words
2. Include H1, H2, H3 headings
3. Naturally include the keyword 3-5 times
4. Provide practical tips and steps
5. Include a conclusion with CTA
6. Write in a helpful, informative tone
7. Format in Markdown

The article should be original, valuable, and optimized for search engines.`;

  // 这里应该调用OpenAI API
  // 由于需要API密钥，这里返回模板
  console.log('⚠️  OpenAI API调用需要配置密钥');
  console.log('提示: 运行 node scripts/setup-api-keys.js 配置API密钥');
  
  return `# ${title}\n\n${description}\n\n[AI生成的内容将在这里]\n`;
}

// 使用Claude API生成文章
async function generateWithClaude(keyword, title, description) {
  const prompt = `Write a comprehensive SEO-optimized blog post about "${keyword}".

Title: ${title}
Meta Description: ${description}

Requirements:
1. Length: 1500-2000 words
2. Include H1, H2, H3 headings
3. Naturally include the keyword 3-5 times
4. Provide practical tips and steps
5. Include a conclusion with CTA
6. Write in a helpful, informative tone
7. Format in Markdown

The article should be original, valuable, and optimized for search engines.`;

  // 这里应该调用Claude API
  console.log('⚠️  Claude API调用需要配置密钥');
  
  return `# ${title}\n\n${description}\n\n[AI生成的内容将在这里]\n`;
}

// 将Markdown转换为Next.js页面组件
function convertToNextJSComponent(markdown, slug, keyword) {
  const lines = markdown.split('\n');
  let title = '';
  let description = '';
  let bodyContent = '';
  let inFrontmatter = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('# ')) {
      title = line.replace('# ', '');
      continue;
    }
    
    if (line.startsWith('> ')) {
      description = line.replace('> ', '').replace(/<\/?[^>]+(>|$)/g, '');
      continue;
    }
    
    bodyContent += line + '\n';
  }
  
  // 如果没找到title，使用slug
  if (!title) {
    title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  
  // 如果没找到description，生成默认描述
  if (!description) {
    description = `Complete guide about ${keyword}. Learn everything you need to know.`;
  }
  
  // 生成Next.js页面组件
  const component = `import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BlogPostClient from "../BlogPostClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: "${title} | Free Online Image Tools",
    description: "${description}",
    keywords: ["${keyword}", "free online tools", "image processing"],
    openGraph: {
      title: "${title} | Free Online Image Tools",
      description: "${description}",
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <BlogPostClient
      locale={locale}
      title="${title}"
      description="${description}"
      publishDate="2026-06-10"
      readTime="8 min read"
      content={\`${bodyContent.replace(/`/g, '\\`')}\`}
    />
  );
}
`;

  return component;
}

// 主函数
async function main() {
  console.log('📝 开始自动生成博客文章...\n');
  
  // 读取配置
  let config = DEFAULT_CONFIG;
  if (fs.existsSync(CONFIG_FILE)) {
    config = { ...config, ...JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')) };
  }
  
  // 如果没有API密钥，提示配置
  if (!config.aiApiKey) {
    console.error('❌ 错误: 未配置AI API密钥！');
    console.log('\n请执行以下步骤:');
    console.log('1. 获取OpenAI API密钥: https://platform.openai.com/');
    console.log('2. 或获取Claude API密钥: https://console.anthropic.com/');
    console.log('3. 运行: node scripts/setup-api-keys.js');
    console.log('\n或者设置环境变量:');
    console.log('  set OPENAI_API_KEY=你的密钥');
    console.log('  set AI_PROVIDER=openai  (或 claude)');
    process.exit(1);
  }
  
  // 选择一个主题（未完成的最旧的）
  const completedPosts = fs.readdirSync(BLOG_DIR).filter(f => 
    fs.statSync(path.join(BLOG_DIR, f)).isDirectory()
  );
  
  const nextTopic = ARTICLE_TOPICS.find(t => !completedPosts.includes(t.slug));
  
  if (!nextTopic) {
    console.log('✅ 所有主题都已完成！');
    console.log('提示: 可以手动添加新主题到 ARTICLE_TOPICS 数组');
    process.exit(0);
  }
  
  console.log(`生成文章: ${nextTopic.title}`);
  console.log(`关键词: ${nextTopic.keyword}`);
  console.log(`Slug: ${nextTopic.slug}\n`);
  
  // 生成文章内容
  let markdown = '';
  
  if (config.aiProvider === 'openai') {
    markdown = await generateWithOpenAI(nextTopic.keyword, nextTopic.title, nextTopic.description);
  } else if (config.aiProvider === 'claude') {
    markdown = await generateWithClaude(nextTopic.keyword, nextTopic.title, nextTopic.description);
  }
  
  // 转换为Next.js组件
  const component = convertToNextJSComponent(markdown, nextTopic.slug, nextTopic.keyword);
  
  // 创建目录
  const postDir = path.join(BLOG_DIR, nextTopic.slug);
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }
  
  // 写入文件
  fs.writeFileSync(path.join(postDir, 'page.tsx'), component);
  
  console.log(`\n✅ 文章已生成: ${postDir}/page.tsx`);
  console.log('\n下一步:');
  console.log('  1. 检查并编辑文章内容');
  console.log('  2. 运行: git add . && git commit -m "Add new blog post" && git push');
  console.log('  3. 等待自动部署\n');
}

// 运行
main().catch(console.error);
