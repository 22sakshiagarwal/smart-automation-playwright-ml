const fs = require('fs');
const { execSync } = require('child_process');


// STEP 1: Read the ML-generated priority list
const csvData = fs.readFileSync('ml/results/prioritized_tests.csv', 'utf-8')
  .trim()
  .split('\n')
  .slice(1)  // remove header row
  .map(row => row.split(',')[0]) // extract test_name only
  .filter(name => name); // remove empty lines

console.log("\n🔄 Running Playwright tests in ML-prioritized order:\n");
console.log(csvData);

// STEP 2: Run tests one by one using grep filter
csvData.forEach(testName => {
  console.log(`\n▶ Running: ${testName}`);
  try {
    execSync(`npx playwright test --grep "${testName}"`, {
      stdio: 'inherit'  // show test output live
    });
  } catch (err) {
    console.error(`❌ Test failed: ${testName}`);
  }
});
