const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🔗 Testing navigation from index to course pages...\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setCacheEnabled(false);

  // 1. index.html 로드
  console.log('📄 Loading index.html...');
  await page.goto('http://localhost:8081/index.html', {
    waitUntil: 'networkidle0',
    timeout: 15000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 2. 선명AX 섹션으로 스크롤
  console.log('📜 Scrolling to section...');
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    const targetHeading = headings.find(h => h.textContent.includes('선명AX 교육과정'));
    if (targetHeading) {
      targetHeading.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 3. 초보자 과정 링크 클릭
  console.log('🖱️  Clicking "초보자 과정" link...');
  await page.evaluate(() => {
    const link = document.querySelector('a[href="pages/course-beginner.html"]');
    if (link) {
      link.click();
    } else {
      console.log('❌ Link not found!');
    }
  });

  await new Promise(resolve => setTimeout(resolve, 3000));

  // 4. 현재 URL 확인
  const currentUrl = page.url();
  console.log(`📍 Current URL: ${currentUrl}`);

  // 5. 페이지 제목 확인
  const title = await page.title();
  console.log(`📋 Page title: ${title}`);

  // 6. 스크린샷
  const screenshotPath = path.join(__dirname, 'screenshot-navigation-test.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`📸 Screenshot saved: ${screenshotPath}`);

  console.log('\n⏳ Browser will stay open for 10 seconds...');
  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
  console.log('\n✅ Test complete!');
})();
