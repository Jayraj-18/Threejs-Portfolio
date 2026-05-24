const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Wait for the server to be ready
  await new Promise(r => setTimeout(r, 2000));
  
  await page.goto('http://localhost:5174/');
  await page.waitForSelector('a[href="/about"]');
  
  // Click About
  await page.click('a[href="/about"]');
  
  // Wait a moment for React to crash and ErrorBoundary to render
  await new Promise(r => setTimeout(r, 1000));
  
  // Extract text
  const body = await page.evaluate(() => document.body.innerText);
  console.log("PAGE TEXT:", body);
  
  await browser.close();
})();
