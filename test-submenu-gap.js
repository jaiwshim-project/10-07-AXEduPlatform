const puppeteer = require('puppeteer');

(async () => {
  console.log('🔍 Testing submenu gap fix...\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    slowMo: 100
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('📄 Loading local page...');
  await page.goto('http://localhost:8081/', {
    waitUntil: 'networkidle0',
    timeout: 10000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('🖱️  Hovering over 선명AX 교육과정...');
  await page.hover('.nav-dropdown:has(a[href*="sunmyung-ax"]) .nav-dropdown-toggle');

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 서브메뉴 위치 확인
  const submenuInfo = await page.evaluate(() => {
    const dropdown = document.querySelector('.nav-dropdown:has(a[href*="sunmyung-ax"])');
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const submenu = dropdown.querySelector('.nav-submenu');

    const toggleRect = toggle.getBoundingClientRect();
    const submenuRect = submenu.getBoundingClientRect();

    return {
      toggleBottom: toggleRect.bottom,
      submenuTop: submenuRect.top,
      gap: submenuRect.top - toggleRect.bottom,
      submenuDisplay: window.getComputedStyle(submenu).display
    };
  });

  console.log('📏 Menu spacing:');
  console.log(`   Toggle bottom: ${submenuInfo.toggleBottom}px`);
  console.log(`   Submenu top: ${submenuInfo.submenuTop}px`);
  console.log(`   Gap: ${submenuInfo.gap}px`);
  console.log(`   Display: ${submenuInfo.submenuDisplay}`);

  console.log('\n💡 Now try moving mouse slowly from menu to submenu...');
  console.log('⏳ Browser will stay open for 20 seconds...');

  await new Promise(resolve => setTimeout(resolve, 20000));

  await browser.close();
  console.log('\n✅ Test complete!');
})();
