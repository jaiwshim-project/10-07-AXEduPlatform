const puppeteer = require('puppeteer');

(async () => {
  console.log('🔍 Testing dropdown menu navigation...\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('📄 Loading index page...');
  await page.goto('http://localhost:8081/', {
    waitUntil: 'networkidle0',
    timeout: 10000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 선명AX 드롭다운 메뉴 호버
  console.log('🖱️  Hovering over 선명AX 교육과정 menu...');
  await page.hover('.nav-dropdown:has(a[href*="sunmyung-ax"]) .nav-dropdown-toggle');

  await new Promise(resolve => setTimeout(resolve, 1500));

  // 서브메뉴 확인
  const submenuVisible = await page.evaluate(() => {
    const dropdown = document.querySelector('.nav-dropdown:has(a[href*="sunmyung-ax"])');
    if (!dropdown) return false;
    const submenu = dropdown.querySelector('.nav-submenu');
    if (!submenu) return false;
    const style = window.getComputedStyle(submenu);
    return style.display !== 'none' && style.opacity !== '0';
  });

  console.log(`   ${submenuVisible ? '✅' : '❌'} Submenu visible: ${submenuVisible}\n`);

  // 초보자 과정 클릭
  console.log('🖱️  Clicking 초보자 과정...');
  await page.click('a[href*="course-beginner"]');
  await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 5000 }).catch(() => {});

  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = page.url();
  const title = await page.title();

  console.log(`   📍 URL: ${url}`);
  console.log(`   📋 Title: ${title}\n`);

  console.log('⏳ Browser will stay open for 15 seconds...');
  await new Promise(resolve => setTimeout(resolve, 15000));

  await browser.close();
  console.log('\n✅ Test complete!');
})();
