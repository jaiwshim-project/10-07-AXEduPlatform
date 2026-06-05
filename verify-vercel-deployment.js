const puppeteer = require('puppeteer');

(async () => {
  console.log('🌐 Verifying Vercel deployment...\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  const urls = [
    'https://10-07-ax-edu-platform.vercel.app/index.html',
    'https://10-07-ax-edu-platform.vercel.app/pages/course-beginner.html',
    'https://10-07-ax-edu-platform.vercel.app/pages/course-basic.html',
    'https://10-07-ax-edu-platform.vercel.app/pages/sunmyung-ax.html'
  ];

  for (const url of urls) {
    console.log(`📄 Checking: ${url}`);
    try {
      const response = await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 15000
      });

      const title = await page.title();
      console.log(`   ✅ Status: ${response.status()}`);
      console.log(`   📋 Title: ${title}\n`);

      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}\n`);
    }
  }

  console.log('⏳ Browser will stay open for 20 seconds for manual inspection...');
  await new Promise(resolve => setTimeout(resolve, 20000));

  await browser.close();
  console.log('\n✅ Verification complete!');
})();
