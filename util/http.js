import axios from "axios";
import ExpenseForm from "./../components/Manage-Expense/ExpenseForm";

const BACKEND_URL =
    "https://reactnativemoneytracker-default-rtdb.europe-west1.firebasedatabase.app";

export const storeExpense = (expenseData) => {
    axios.post(BACKEND_URL + "/expenses.json", expenseData);
};

export const fetchExpenses = async() => {
    const response = await axios.get(BACKEND_URL + "/expenses.json");

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };
        expenses.push(expenseObj);
    }
    return expenses;
};