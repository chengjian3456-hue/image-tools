# 🚀 ImageTools 网站自动化运营系统 - 完整指南

## 📋 目录

- [系统概述](#系统概述)
- [功能特性](#功能特性)
- [快速开始](#快速开始)
- [详细配置](#详细配置)
- [定时任务设置](#定时任务设置)
- [日常使用](#日常使用)
- [故障排除](#故障排除)
- [API密钥获取指南](#api密钥获取指南)

---

## 系统概述

这是一个完整的网站自动化运营系统，专为 `onlineimagetools.xyz` 设计，能够自动执行以下任务：

### ✅ 已实现的功能

1. **每日网站健康检查**
   - 自动检查网站可访问性
   - 监控页面加载状态
   - 记录错误和异常

2. **关键词排名监控** 🔍
   - 自动追踪5个核心关键词的Google排名
   - 生成排名变化报告
   - 支持SERP API集成

3. **自动生成博客文章** 📝
   - 基于AI自动生成SEO优化文章
   - 支持OpenAI和Claude API
   - 自动转换为Next.js页面组件

4. **自动部署**
   - 生成文章后自动提交到GitHub
   - 触发Vercel/Netlify自动部署
   - 无需手动操作

5. **技术SEO监控**
   - 检查sitemap.xml和robots.txt
   - 验证页面元数据
   - 确保最佳SEO实践

---

## 功能特性

### 🔍 关键词排名监控

**监控的关键词：**
- `free image resizer online`
- `HEIC to JPG converter free`
- `compress image online free`
- `remove background from image free`
- `WebP to PNG converter online`

**数据来源：**
- SERP API (https://serpapi.com/)
- 免费额度：100次/月
- 自动重试和错误处理

**输出：**
- `keyword-ranking-log.json` - 完整的排名历史
- 每日排名变化报告
- 排名趋势分析

---

### 📝 自动文章生成

**文章主题库：**
系统内置5个高搜索量主题，可自定义扩展：
1. Free Image Resizer Online Guide
2. HEIC to JPG Converter Free Guide
3. Compress Images for Web Speed
4. Remove Background Tools Comparison
5. WebP vs JPEG vs PNG Comparison

**AI生成特性：**
- 1500-2000字高质量文章
- SEO优化（关键词密度、标题结构）
- Markdown格式，自动转换为Next.js组件
- 包含实用技巧和操作步骤

**支持的AI提供商：**
- ✅ OpenAI GPT-4 (推荐)
- ✅ Claude (Anthropic)

---

## 快速开始

### 步骤1：配置API密钥

```bash
cd C:\Users\86159\Documents\image-tools-fix
node scripts\setup-api-keys.js
```

按照向导提示输入：
1. SERP API密钥（用于关键词排名监控）
2. OpenAI或Claude API密钥（用于自动生成文章）

### 步骤2：测试脚本

```bash
# 测试关键词排名监控
node scripts\check-keyword-ranking.js

# 测试文章生成
node scripts\generate-blog-post.js
```

### 步骤3：设置定时任务

**方式1：导入任务配置文件（推荐）**

1. 打开"任务计划程序"
2. 点击"导入任务"
3. 选择 `tasks\SEO-Automation-Task.xml`
4. 输入Windows密码确认

**方式2：手动创建任务**

1. 打开"任务计划程序"
2. 创建基本任务
3. 名称：`ImageTools每日SEO运营`
4. 触发器：每天上午10:00
5. 操作：启动程序
6. 程序：`C:\Program Files\Git\bin\bash.exe`
7. 参数：`/c/Users/86159/Documents/image-tools-fix/scripts/enhanced-daily-operations.sh`
8. 起始于：`C:\Users\86159\Documents\image-tools-fix`

---

## 详细配置

### 配置文件：`.seo-config.json`

```json
{
  "serpApiKey": "your-serp-api-key",
  "aiProvider": "openai",
  "aiApiKey": "sk-your-openai-key",
  "targetDomain": "onlineimagetools.xyz",
  "keywords": [
    {
      "keyword": "free image resizer online",
      "url": "https://onlineimagetools.xyz/tools/image-resizer"
    }
  ]
}
```

### 自定义关键词

编辑 `.seo-config.json`，添加新的关键词：

```json
{
  "keywords": [
    {
      "keyword": "你的关键词",
      "url": "https://onlineimagetools.xyz/对应页面"
    }
  ]
}
```

### 自定义文章主题

编辑 `scripts/generate-blog-post.js`，在 `ARTICLE_TOPICS` 数组中添加新主题：

```javascript
const ARTICLE_TOPICS = [
  {
    slug: 'your-article-slug',
    keyword: 'your-target-keyword',
    title: 'Your Article Title',
    description: 'Your article meta description',
  },
  // 添加更多...
];
```

---

## 定时任务设置

### 任务执行时间

**默认设置：每天上午10:00**

可以修改为：
- 每天多次（例如：10:00, 15:00, 20:00）
- 每周特定日期
- 自定义间隔

### 修改执行时间

1. 打开"任务计划程序"
2. 找到 `ImageTools每日SEO运营` 任务
3. 右键 → 属性
4. 修改触发器时间

### 手动运行任务

```bash
# 方式1：通过任务计划程序
右键任务 → 运行

# 方式2：直接运行脚本
cd C:\Users\86159\Documents\image-tools-fix
bash scripts\enhanced-daily-operations.sh
```

---

## 日常使用

### 查看日志

**每日运营日志：**
```bash
cat C:\Users\86159\Documents\image-tools-fix\seo-daily-log.txt
```

**关键词排名日志：**
```bash
cat C:\Users\86159\Documents\image-tools-fix\keyword-ranking-log.json
```

### 监控排名变化

运行排名检查脚本：
```bash
node scripts\check-keyword-ranking.js
```

查看生成的报告：
```bash
cat keyword-ranking-log.json
```

### 手动生成文章

```bash
node scripts\generate-blog-post.js
```

生成后，文章会自动保存到 `src/app/blog/你的文章slug/page.tsx`

### 查看自动部署状态

- **Vercel**: https://vercel.com/dashboard
- **Netlify**: https://app.netlify.com/
- **GitHub Actions**: 查看仓库的Actions选项卡

---

## 故障排除

### 问题1：脚本无法运行

**可能原因：**
- Git Bash路径不正确
- 脚本没有执行权限

**解决方案：**
```bash
# 赋予执行权限
chmod +x scripts/*.sh

# 检查Git Bash路径
where bash
```

### 问题2：API调用失败

**SERP API错误：**
- 检查API密钥是否正确
- 确认免费额度未用完
- 查看错误日志

**AI API错误：**
- 检查API密钥格式
- 确认账户有余额
- 查看API使用限制

### 问题3：文章生成失败

**可能原因：**
- AI API密钥未配置
- 网络连接问题
- API速率限制

**解决方案：**
```bash
# 检查配置
cat .seo-config.json

# 测试API连接
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

### 问题4：定时任务未执行

**检查清单：**
1. 打开"任务计划程序"
2. 找到任务，查看"上次运行结果"
3. 查看"下次运行时间"是否正确
4. 检查任务是否启用

**重新启用任务：**
1. 右键任务 → 属性
2. 勾选"启用"
3. 点击"确定"

---

## API密钥获取指南

### 1. SERP API（关键词排名监控）

**注册地址：<ADDRESS_REDACTED>

**步骤：**
1. 访问官网，点击"Get Started"
2. 注册账号（免费）
3. 进入Dashboard，复制API Key
4. 免费额度：100次/月

**使用建议：**
- 5个关键词 × 每月30天 = 150次/月
- 建议：每2天检查一次，或升级付费计划

---

### 2. OpenAI API（文章生成 - 推荐）

**注册地址：<ADDRESS_REDACTED>

**步骤：**
1. 访问官网，点击"Sign up"
2. 注册账号并登录
3. 进入API Keys页面：https://platform.openai.com/api-keys
4. 点击"Create new secret key"
5. 复制密钥（sk-开头）

**定价：**
- GPT-4: ~$0.03/1000 tokens
- 一篇文章约2000字 = ~3000 tokens = ~$0.09
- 建议充值$10-20即可长期使用

---

### 3. Claude API（文章生成 - 备选）

**注册地址：<ADDRESS_REDACTED>

**步骤：**
1. 访问官网，注册账号
2. 进入API Keys页面
3. 创建新的API密钥
4. 复制密钥

**定价：**
- Claude 3: 类似OpenAI定价
- 性能优秀，适合长文章生成

---

## 高级功能

### 1. 添加更多关键词

编辑 `.seo-config.json`：

```json
{
  "keywords": [
    {
      "keyword": "new keyword here",
      "url": "https://onlineimagetools.xyz/tools/new-tool"
    }
  ]
}
```

### 2. 自定义文章模板

编辑 `scripts/generate-blog-post.js` 中的 `prompt` 变量，自定义文章风格和结构。

### 3. 集成Google Search Console API

在 `scripts/check-keyword-ranking.js` 中添加Google Search Console API集成，获取更准确的排名数据。

### 4. 自动社交媒体分享

创建新脚本 `scripts/auto-social-media.js`，在文章发布后自动分享到：
- Twitter/X
- Reddit
- LinkedIn
- 知乎

---

## 常见问题

### Q1: 系统会自动发布文章吗？

**A:** 是的！系统会自动：
1. 生成文章
2. 保存到正确目录
3. 提交到GitHub
4. 触发自动部署

你只需要定期查看日志，确保一切正常运行。

### Q2: 如何暂停自动发布？

**A:** 两种方式：
1. 打开"任务计划程序"，禁用任务
2. 在 `.seo-config.json` 中设置 `"autoPublish": false`

### Q3: 文章质量如何？

**A:** AI生成的文章需要人工审核：
- 运行脚本后，检查生成的文章
- 编辑和改进内容
- 确认无误后再推送

建议：先生成几篇测试文章，调整prompt获得最佳效果。

### Q4: 成本是多少？

**A:** 
- SERP API: 免费100次/月（足够使用）
- OpenAI API: $10-20充值可用很久
- 总成本: <$30/月

### Q5: 如何监控效果？

**A:** 
1. 查看 `keyword-ranking-log.json` 排名变化
2. 连接Google Search Console查看流量
3. 使用Google Analytics监控用户行为

---

## 支持与反馈

如有问题或建议，请：
1. 查看本文档的"故障排除"部分
2. 查看日志文件获取错误信息
3. 联系开发者

---

## 更新日志

### Version 1.0 (2026-06-10)
- ✅ 初始版本发布
- ✅ 关键词排名监控
- ✅ 自动文章生成
- ✅ 定时任务集成
- ✅ 完整文档

---

**祝你的网站流量暴涨！** 🚀📈
