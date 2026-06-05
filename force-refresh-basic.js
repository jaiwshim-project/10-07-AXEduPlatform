const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // 캐시 완전 비활성화
  await page.setCacheEnabled(false);

  // 타임스탬프로 캐시 우회
  const url = `http://localhost:8081/pages/course-basic.html?t=${Date.now()}`;
  console.log('📄 Loading:', url);

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 10000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 히어로 섹션 텍스트 확인
  const heroText = await page.evaluate(() => {
    const heroSection = document.querySelector('.hero-course p');
    return heroSection ? heroSection.innerHTML : 'NOT FOUND';
  });

  console.log('\n📋 Hero section content:');
  console.log(heroText);
  console.log('\n');

  // Claude Code 텍스트 확인
  const hasClaudeCode = heroText.includes('Claude Code');
  console.log(`✅ Contains "Claude Code": ${hasClaudeCode}`);

  // 스크린샷
  const screenshotPath = path.join(__dirname, 'screenshot-basic-fresh.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`📸 Screenshot saved: ${screenshotPath}`);

  console.log('\n⏳ Browser will stay open for 10 seconds...');
  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
})();
