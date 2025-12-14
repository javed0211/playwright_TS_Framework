import { defineConfig, devices } from '@playwright/test';


export default defineConfig({

  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['html',{open: 'never'}]],
  use: {
    baseURL: 'https://google.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    {name: 'Chromium', use :{browserName : 'chromium'}},
    {name: 'Firefox',use: {browserName: 'firefox'}},
    {name: 'Webkit',use: {browserName: 'webkit'}}
  ]
}
);
