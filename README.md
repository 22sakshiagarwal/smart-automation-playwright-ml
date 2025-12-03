Here is a **clean, professional, fully formatted, bold-styled README.md** for your GitHub repo.

You can copy–paste directly into GitHub.
Everything is bolded, structured, and formatted properly.

---

# 🎯 **Smart Automation Pipeline**

### **Playwright E2E Testing + Jenkins CI/CD + Machine Learning Test Prioritization**

This repository contains an automated testing framework built using **Playwright**, integrated with a **Jenkins CI/CD pipeline**, and enhanced with a **Machine Learning–based test prioritizer**.
The system reduces execution time by **running high-risk tests first** using historical failure patterns.

---

# 🚀 **Features**

## ✅ **1. Jenkins CI/CD Pipeline**

* **Code checkout** from GitHub
* **Environment setup**
* Install **Node.js + Playwright**
* Run **Playwright full test suite**
* Generate **HTML + JSON** reports
* Update **test execution history** using Python
* Run **ML-based test prioritizer**
* Execute **prioritized test suite**

---

## ✅ **2. Playwright Automation**

* **10 functional login test cases**
* **Headless Chromium**
* Generates:

  * **HTML reports**
  * **JSON results**
  * **Screenshots**
  * **Videos**
  * **Trace logs**

---

## ✅ **3. Machine Learning Prioritizer**

Uses `test_history.csv` to rank test cases based on:

* **Past failures**
* **Execution time**
* **Stability**
* **Failure patterns**

**Outputs:**
📄 **prioritized_tests.csv**

---

# 📂 **Project Structure**

```
smart-automation-playwright-ml/
│── tests/
│── test-results/
│── playwright-report/
│── ml/
│     ├── prioritizer.py
│     ├── test_history.csv
│── scripts/
│     ├── update-test-history.py
│     ├── run-prioritized-tests.js
│── jenkinsfile
│── playwright.config.js
│── package.json
```

---

# 🛠️ **Installation & Setup**

### **Step 1 — Clone Repository**

```bash
git clone "https://github.com/<your-username>/smart-automation-playwright-ml.git"
cd smart-automation-playwright-ml
```

### **Step 2 — Install Dependencies**

```bash
npm install
```

### **Step 3 — Install Playwright Browsers**

```bash
npx playwright install
```

---

# ▶️ **Running Tests Locally**

### **Run full test suite**

```bash
npx playwright test
```

### **Run with specific reporters**

```bash
npx playwright test --reporter=list --reporter=html
```

### **Open Playwright HTML Report**

```bash
npx playwright show-report
```

---

# 📊 **Machine Learning Integration**

### **Update test history**

```bash
python scripts/update-test-history.py
```

### **Run ML prioritizer**

```bash
python ml/prioritizer.py
```

### **Execute prioritized test suite**

```bash
node scripts/run-prioritized-tests.js
```

---

# ⚙️ **Start Jenkins Manually**

### **Step 1 — Open CMD or PowerShell**

### **Step 2 — Navigate to the folder containing `jenkins.war`**

Example:

```bash
cd "C:\Users\Sakshi Agarwal\Downloads"
```

### **Step 3 — Start Jenkins**

```bash
java -jar jenkins.war
```

### Jenkins URL:

```
http://localhost:8080
```

---

# ⚠️ **Important Notes**

* Do **NOT rename** the file — it must remain `jenkins.war`
* Jenkins runs on **port 8080**
* Keep the terminal **open**, or Jenkins will stop

---




