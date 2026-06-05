const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setCacheEnabled(false);

  const url = `http://localhost:8081/pages/course-basic.html?nocache=${Date.now()}`;
  console.log('📄 Loading:', url);

  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 10000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 히어로 섹션만 스크린샷
  const heroSection = await page.$('.hero-course');

  if (heroSection) {
    const screenshotPath = path.join(__dirname, 'screenshot-hero-section.png');
    await heroSection.screenshot({ path: screenshotPath });
    console.log('📸 Hero section screenshot saved:', screenshotPath);

    // 텍스트 내용 확인
    const text = await page.evaluate(() => {
      const p = document.querySelector('.hero-course p');
      return p ? p.textContent : 'NOT FOUND';
    });

    console.log('\n📝 Hero text content:');
    console.log(text);
  } else {
    console.log('❌ Hero section not found');
  }

  console.log('\n⏳ Browser will stay open for 10 seconds...');
  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
})();
