const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('http://localhost:8080/pages/sunmyung-ax.html#tab-1', {
    waitUntil: 'networkidle0',
    timeout: 10000
  });
  await new Promise(resolve => setTimeout(resolve, 1500));

  const screenshotPath = path.join(__dirname, 'screenshot-tab1-with-claude-code.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log('✅ Tab 1 with Claude Code row captured!');

  await browser.close();
})();
