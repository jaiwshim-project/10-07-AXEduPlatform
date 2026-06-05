const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setCacheEnabled(false);

  await page.goto('http://localhost:8081/index.html', {
    waitUntil: 'networkidle0',
    timeout: 15000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 선명AX 섹션의 위치 확인
  const sectionPosition = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    const targetHeading = headings.find(h => h.textContent.includes('선명AX 교육과정 — 4단계 학습 경로'));

    if (targetHeading) {
      const rect = targetHeading.getBoundingClientRect();
      const scrollY = window.scrollY;
      return {
        found: true,
        offsetTop: targetHeading.offsetTop,
        scrollY: scrollY,
        absoluteTop: rect.top + scrollY
      };
    }
    return { found: false };
  });

  console.log('📍 Section position:', sectionPosition);

  if (sectionPosition.found) {
    // 섹션으로 스크롤
    await page.evaluate((top) => {
      window.scrollTo(0, top - 100);
    }, sectionPosition.absoluteTop);

    await new Promise(resolve => setTimeout(resolve, 1000));

    // 스크린샷 캡처
    const screenshotPath = path.join(__dirname, 'screenshot-section-focused.png');
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log('📸 Section screenshot saved:', screenshotPath);
  }

  await browser.close();
})();
