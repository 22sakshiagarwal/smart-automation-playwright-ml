import json
import pandas as pd

# Load test history CSV
df = pd.read_csv("ml/test_history.csv")

# Load Playwright JSON report
with open("playwright-report/report.json", "r") as f:
    report = json.load(f)

# Loop through suites
for suite in report["suites"]:
    for subsuite in suite["suites"]:
        for spec in subsuite["specs"]:
            test_name = spec["title"].split(" ")[0].strip()   # Extract TC01_xxx
            result = spec["tests"][0]["results"][0]
            status = result["status"]
            duration = result["duration"] / 1000   # convert ms → sec

            # find matching test
            row = df[df["test_name"] == test_name]
            if not row.empty:
                idx = row.index[0]

                # Update failure info
                if status == "failed":
                    df.at[idx, "failure_count"] += 1
                    df.at[idx, "last_failed"] = 1
                else:
                    df.at[idx, "last_failed"] = 0

                # update execution time
                df.at[idx, "execution_time"] = duration

# Save updated history
df.to_csv("ml/test_history.csv", index=False)
print("✔ test_history.csv updated!")
