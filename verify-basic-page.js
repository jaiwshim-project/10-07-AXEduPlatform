const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('http://localhost:8080/pages/course-basic.html', {
    waitUntil: 'networkidle0',
    timeout: 10000
  });
  await new Promise(resolve => setTimeout(resolve, 1000));

  const screenshotPath = path.join(__dirname, 'screenshot-course-basic-updated.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log('✅ Updated course-basic.html screenshot captured!');

  await browser.close();
})();
