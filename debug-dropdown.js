const puppeteer = require('puppeteer');

(async () => {
  console.log('🔍 Debugging dropdown menu...\n');

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    devtools: true
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('📄 Loading Vercel production site...');
  await page.goto('https://ax-education-platform.vercel.app/', {
    waitUntil: 'networkidle0',
    timeout: 15000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 드롭다운 요소 확인
  const dropdownInfo = await page.evaluate(() => {
    const dropdown = document.querySelector('.nav-dropdown:has(a[href*="sunmyung-ax"])');

    if (!dropdown) {
      return { found: false, message: 'Dropdown element not found' };
    }

    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const submenu = dropdown.querySelector('.nav-submenu');
    const submenuLinks = submenu ? submenu.querySelectorAll('a') : [];

    return {
      found: true,
      hasToggle: !!toggle,
      hasSubmenu: !!submenu,
      submenuLinksCount: submenuLinks.length,
      submenuHTML: submenu ? submenu.outerHTML.substring(0, 500) : 'NO SUBMENU',
      submenuDisplay: submenu ? window.getComputedStyle(submenu).display : 'N/A'
    };
  });

  console.log('🔍 Dropdown element info:');
  console.log(JSON.stringify(dropdownInfo, null, 2));

  if (dropdownInfo.found && dropdownInfo.hasSubmenu) {
    console.log('\n🖱️  Hovering over dropdown...');

    await page.hover('.nav-dropdown:has(a[href*="sunmyung-ax"]) .nav-dropdown-toggle');
    await new Promise(resolve => setTimeout(resolve, 2000));

    const afterHover = await page.evaluate(() => {
      const submenu = document.querySelector('.nav-dropdown:has(a[href*="sunmyung-ax"]) .nav-submenu');
      return submenu ? window.getComputedStyle(submenu).display : 'N/A';
    });

    console.log(`   Display after hover: ${afterHover}`);
  }

  console.log('\n⏳ Browser will stay open for 30 seconds for manual inspection...');
  console.log('💡 Try hovering over "선명AX 교육과정" menu item manually');

  await new Promise(resolve => setTimeout(resolve, 30000));

  await browser.close();
})();
