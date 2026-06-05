const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const pages = [
    { url: 'http://localhost:8080/pages/course-beginner.html', name: 'course-beginner' },
    { url: 'http://localhost:8080/pages/course-basic.html', name: 'course-basic' },
    { url: 'http://localhost:8080/pages/course-intermediate.html', name: 'course-intermediate' },
    { url: 'http://localhost:8080/pages/course-advanced.html', name: 'course-advanced' },
    { url: 'http://localhost:8080/pages/sunmyung-ax.html', name: 'sunmyung-ax-tab0' },
    { url: 'http://localhost:8080/pages/sunmyung-ax.html#tab-1', name: 'sunmyung-ax-tab1' },
    { url: 'http://localhost:8080/pages/sunmyung-ax.html#tab-2', name: 'sunmyung-ax-tab2' },
    { url: 'http://localhost:8080/pages/sunmyung-ax.html#tab-3', name: 'sunmyung-ax-tab3' }
  ];

  for (const pageInfo of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    try {
      await page.goto(pageInfo.url, { waitUntil: 'networkidle0', timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 1000));

      const screenshotPath = path.join(__dirname, `screenshot-${pageInfo.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✅ Captured: ${pageInfo.name}`);
    } catch (error) {
      console.error(`❌ Failed to capture ${pageInfo.name}:`, error.message);
    }

    await page.close();
  }

  await browser.close();
  console.log('\n🎉 All screenshots captured!');
})();
