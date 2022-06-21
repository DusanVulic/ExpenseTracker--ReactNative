import axios from "axios";

export const storeExpense = (expenseData) => {
    axios.post(
        "https://reactnativemoneytracker-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
        expenseData
    );
};