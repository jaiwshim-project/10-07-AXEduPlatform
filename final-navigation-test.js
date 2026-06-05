const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🔗 Final navigation test with CSS fixes\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.setCacheEnabled(false);

  console.log('📄 Loading index.html...');
  await page.goto('http://localhost:8081/index.html', {
    waitUntil: 'networkidle0'
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 선명AX 섹션으로 스크롤
  console.log('📜 Scrolling to section...');
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    const target = headings.find(h => h.textContent.includes('선명AX 교육과정'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 4개 카드 모두 테스트
  const courses = [
    { name: '초보자', href: 'pages/course-beginner.html' },
    { name: '초급', href: 'pages/course-basic.html' },
    { name: '중급', href: 'pages/course-intermediate.html' },
    { name: '고급', href: 'pages/course-advanced.html' }
  ];

  for (const course of courses) {
    console.log(`\n🖱️  Testing ${course.name} 과정...`);

    // 카드 클릭
    await page.click(`a[href="${course.href}"]`);
    await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 5000 }).catch(() => {});

    await new Promise(resolve => setTimeout(resolve, 1000));

    const url = page.url();
    const title = await page.title();

    if (url.includes(course.href.replace('pages/', ''))) {
      console.log(`   ✅ SUCCESS: ${url}`);
      console.log(`   📋 Title: ${title}`);
    } else {
      console.log(`   ❌ FAILED: Expected ${course.href}, got ${url}`);
    }

    // 뒤로 가기
    if (url !== 'http://localhost:8081/index.html') {
      await page.goBack({ waitUntil: 'networkidle0' });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 다시 스크롤
      await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll('h2'));
        const target = headings.find(h => h.textContent.includes('선명AX 교육과정'));
        if (target) target.scrollIntoView({ behavior: 'auto', block: 'center' });
      });

      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log('\n⏳ Browser will stay open for 5 seconds...');
  await new Promise(resolve => setTimeout(resolve, 5000));

  await browser.close();
  console.log('\n✅ All tests complete!');
})();
