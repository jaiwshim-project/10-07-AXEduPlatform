const puppeteer = require('puppeteer');

(async () => {
  console.log('🖱️  Manual click test - Browser will stay open for 30 seconds');
  console.log('📋 Instructions: Manually scroll and click on course cards\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.setCacheEnabled(false);

  await page.goto('http://localhost:8081/index.html', {
    waitUntil: 'networkidle0'
  });

  console.log('✅ Page loaded');
  console.log('⏰ Browser will stay open for 30 seconds for manual testing...');
  console.log('🔍 Try clicking on the course cards in the "선명AX 교육과정" section');

  await new Promise(resolve => setTimeout(resolve, 30000));

  await browser.close();
  console.log('\n✅ Test window closed');
})();
