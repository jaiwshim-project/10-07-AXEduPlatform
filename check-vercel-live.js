const puppeteer = require('puppeteer');

(async () => {
  console.log('🌐 Checking live Vercel deployment...\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  const baseUrl = 'https://ax-education-platform.vercel.app';

  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/pages/course-beginner.html`,
    `${baseUrl}/pages/course-basic.html`,
    `${baseUrl}/pages/sunmyung-ax.html`
  ];

  for (const url of urls) {
    console.log(`📄 Checking: ${url}`);
    try {
      const response = await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 15000
      });

      const title = await page.title();
      const status = response.status();

      if (status === 200) {
        console.log(`   ✅ Status: ${status}`);
        console.log(`   📋 Title: ${title}\n`);
      } else {
        console.log(`   ⚠️  Status: ${status}`);
        console.log(`   📋 Title: ${title}\n`);
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}\n`);
    }
  }

  // 선명AX 섹션 확인
  console.log('🔍 Checking if 선명AX section exists on homepage...');
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle0' });

  const hasSection = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    return headings.some(h => h.textContent.includes('선명AX 교육과정'));
  });

  console.log(`   ${hasSection ? '✅' : '❌'} Section found: ${hasSection}\n`);

  console.log('⏳ Browser will stay open for 30 seconds for inspection...');
  await new Promise(resolve => setTimeout(resolve, 30000));

  await browser.close();
  console.log('\n✅ Check complete!');
})();
