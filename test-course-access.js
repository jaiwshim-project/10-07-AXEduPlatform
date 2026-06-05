const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  const urls = [
    'http://localhost:8080/pages/course-beginner.html',
    'http://localhost:8080/pages/course-basic.html',
    'http://localhost:8080/pages/course-intermediate.html',
    'http://localhost:8080/pages/course-advanced.html'
  ];

  for (const url of urls) {
    const page = await browser.newPage();
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle0', timeout: 5000 });
      const title = await page.title();
      console.log(`✅ ${url}`);
      console.log(`   Status: ${response.status()}`);
      console.log(`   Title: ${title}\n`);
    } catch (error) {
      console.log(`❌ ${url}`);
      console.log(`   Error: ${error.message}\n`);
    }
    await page.close();
  }

  await browser.close();
})();
