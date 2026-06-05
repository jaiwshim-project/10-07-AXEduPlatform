const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('http://localhost:8080/index.html', {
    waitUntil: 'networkidle0',
    timeout: 10000
  });
  await new Promise(resolve => setTimeout(resolve, 1500));

  const screenshotPath = path.join(__dirname, 'screenshot-index-with-courses.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log('✅ Index page with 4 course links captured!');

  await browser.close();
})();
