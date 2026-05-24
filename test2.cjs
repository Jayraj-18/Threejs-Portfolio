const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message, error.stack));

  // Wait for the server to be ready
  await new Promise(r => setTimeout(r, 2000));
  
  await page.goto('http://localhost:5174/');
  await page.waitForSelector('a[href="/about"]');
  
  // Click About
  await page.click('a[href="/about"]');
  
  // Wait a moment for React to crash and ErrorBoundary to render
  await new Promise(r => setTimeout(r, 2000));
  
  await browser.close();
})();
