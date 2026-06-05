const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // 메인 페이지 캡처
  await page.goto('http://127.0.0.1:8080', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-index.png', fullPage: false });
  console.log('Index page screenshot saved: screenshot-index.png');

  // 네비게이션 부분만 캡처
  const navElement = await page.$('.navbar');
  if (navElement) {
    await navElement.screenshot({ path: 'screenshot-nav.png' });
    console.log('Navigation screenshot saved: screenshot-nav.png');
  }

  // 선명AX 교육과정 페이지 캡처
  await page.goto('http://127.0.0.1:8080/pages/sunmyung-ax.html', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-sunmyung-ax.png', fullPage: false });
  console.log('Sunmyung AX page screenshot saved: screenshot-sunmyung-ax.png');

  await browser.close();
})();
