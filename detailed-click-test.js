const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🔍 Detailed click test starting...\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.setCacheEnabled(false);

  // 콘솔 로그 수집
  page.on('console', msg => console.log('🖥️  BROWSER:', msg.text()));

  console.log('📄 Loading http://localhost:8081/index.html...');
  await page.goto('http://localhost:8081/index.html', {
    waitUntil: 'networkidle0',
    timeout: 15000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 선명AX 섹션으로 스크롤
  console.log('📜 Scrolling to 선명AX section...');
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    const targetHeading = headings.find(h => h.textContent.includes('선명AX 교육과정'));
    if (targetHeading) {
      targetHeading.scrollIntoView({ behavior: 'smooth', block: 'center' });
      console.log('✅ Scrolled to section');
    }
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 초보자 과정 카드 정보 확인
  const cardInfo = await page.evaluate(() => {
    const link = document.querySelector('a[href="pages/course-beginner.html"]');
    if (link) {
      const rect = link.getBoundingClientRect();
      return {
        found: true,
        href: link.getAttribute('href'),
        text: link.textContent.trim().substring(0, 100),
        classes: link.className,
        isVisible: rect.width > 0 && rect.height > 0,
        position: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
      };
    }
    return { found: false };
  });

  console.log('🔗 Link info:', JSON.stringify(cardInfo, null, 2));

  if (cardInfo.found) {
    console.log('\n🖱️  Method 1: Direct click on element...');

    // 네비게이션 대기 설정
    const navigationPromise = page.waitForNavigation({
      waitUntil: 'networkidle0',
      timeout: 10000
    }).catch(err => {
      console.log('⚠️  Navigation timeout or error:', err.message);
      return null;
    });

    // 클릭
    await page.click('a[href="pages/course-beginner.html"]');

    console.log('⏳ Waiting for navigation...');
    await navigationPromise;

    await new Promise(resolve => setTimeout(resolve, 2000));

    const finalUrl = page.url();
    const finalTitle = await page.title();

    console.log('\n📍 Final URL:', finalUrl);
    console.log('📋 Final Title:', finalTitle);

    // 스크린샷
    const screenshotPath = path.join(__dirname, 'screenshot-detailed-click.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log('📸 Screenshot saved:', screenshotPath);

    // URL이 변경되지 않았다면 문제 진단
    if (finalUrl === 'http://localhost:8081/index.html') {
      console.log('\n❌ PROBLEM: URL did not change!');
      console.log('Checking for JavaScript event handlers...');

      const hasClickHandler = await page.evaluate(() => {
        const link = document.querySelector('a[href="pages/course-beginner.html"]');
        const events = getEventListeners(link);
        return events;
      }).catch(() => null);

      console.log('Event handlers:', hasClickHandler);
    } else {
      console.log('\n✅ SUCCESS: Navigation worked!');
    }

  } else {
    console.log('❌ Link not found!');
  }

  console.log('\n⏳ Browser will stay open for 10 seconds...');
  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
  console.log('\n✅ Test complete!');
})();
