const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();

  // 캐시 완전 비활성화
  await page.setCacheEnabled(false);
  await page.setViewport({ width: 1920, height: 1080 });

  // 타임스탬프로 캐시 우회
  await page.goto(`http://localhost:8080/index.html?t=${Date.now()}`, {
    waitUntil: 'networkidle0',
    timeout: 10000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 선명AX 섹션이 있는지 확인
  const hasSection = await page.evaluate(() => {
    const text = document.body.innerText;
    return text.includes('선명AX 교육과정 — 4단계 학습 경로');
  });

  console.log('✅ Section found:', hasSection);

  const screenshotPath = path.join(__dirname, 'screenshot-index-final.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log('✅ Screenshot saved:', screenshotPath);

  await browser.close();
})();
