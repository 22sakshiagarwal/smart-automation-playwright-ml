import pandas as pd
from sklearn.preprocessing import MinMaxScaler

def prioritize_tests():
    df = pd.read_csv("ml/test_history.csv")

    scaler = MinMaxScaler()

    df["failure_score"] = scaler.fit_transform(df[["failure_count"]])
    df["recent_fail_score"] = df["last_failed"] * 1.0
    df["time_score"] = scaler.fit_transform(df[["execution_time"]])

    # Weighted priority formula (tune as needed)
    df["priority"] = (0.5 * df["failure_score"] +
                      0.3 * df["recent_fail_score"] +
                      0.2 * df["time_score"])

    df = df.sort_values(by="priority", ascending=False)

    THRESHOLD = 0.4
    df_selected = df[df["priority"] >= THRESHOLD]

    print("Selected tests:")
    print(df_selected[["test_name", "priority"]])

    # Save only selected tests
    df_selected[["test_name", "priority"]].to_csv("ml/results/prioritized_tests.csv", index=False)

if __name__ == "__main__":
    prioritize_tests()
