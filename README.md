# QA-Fresher-Training-Task-Part-2
# Overview
```bash
This project demonstrates advanced playwright automation concepts which includes - 
• Handle multiple browser tabs and windows. 
• Intercept and mock network requests. 
• Create reusable Playwright Fixtures. 
• Debug automation failures using Playwright tools. 
• Analyze reports and traces. 
• Improve framework reusability and maintainability.
```
# Project Structure
```bash
TASK_2_DAY_2/
| 
├── tests/ 
│   ├── browserWindows.spec.ts 
│   ├── failureSimulation.spec.ts 
│   ├── fixtureDemo.spec.ts 
|   ├── networkMocking.spec.ts 
|   ├── timeoutSimulation.spec.ts 
|   └── example.spec.ts
│
| 
├── pages/ 
│   ├── BrowserWindowsPage.ts 
| 
├── test-data/ 
│   ├── books.ts 
│   └── emptyBooks.ts 
| 
├── utils/ 
│   └── Logger.ts 
├── fixtures/ 
│   └── customFixtures.ts
├── test-results/  
├── playwright.config.ts 
├── package.json 
└── README.md
```
# Prerequisites
1. Node.js
2. npm
3. Visual Studio Code
Verify installation:
``` bash
node -v
npm -v
```
# Installation
1. Clone the repository
   ```bash
   git clone https://github.com/AatmeeyaShetty/QA-Fresher-Training-Task-Part-2
   ```
2. Navigate to the folder
 ```bash
   cd TASK_2_DAY_2
   ```
3. Install Playwright browsers
   ```bash
   npx playwright install
   ```
# Execution commands
1. Run all Tests
   ```bash
   npx playwright test tests/browserWindows.spec.ts
   ```
2. Run Tests in headed mode
   ```bash
   npx playwright test --headed
   ```
3. Run individual Tests
   For Browser Window Tests
   ```bash
   npx playwright test tests/browserWindows.spec.ts
   ```
   For Network Mocking Tests
   ```bash
   npx playwright test tests/networkMocking.spec.ts
   ```
   For Failure Simulation Tests
   ```bash
   npx playwright test tests/failureSimulation.spec.ts
   ```
   For Timeout Simulation Tests
   ```bash
   npx playwright test tests/timeoutSimulation.spec.ts
   ```
   For Fixtures Tests
   ```bash
   npx playwright test tests/fixtureDemo.spec.ts
   ```
4. To generate HTML Reports
   ```bash
   npx playwright show-report
   ```
5. For PLaywright Inspector
   ``` bash
   npx playwright test --debug
   ```
6. For trace Viewer
   ```bash
   npx playwright show-trace.zip
   ```
   



