import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Pair of shoes",
    amount: 59.99,
    date: new Date("2022-06-15"),
  },
  {
    id: "e2",
    description: "Gym pass",
    amount: 29.99,
    date: new Date("2022-05-18"),
  },
  {
    id: "e3",
    description: "Supplements",
    amount: 79.99,
    date: new Date("2022-06-15"),
  },
  {
    id: "e4",
    description: "Bugsy's food",
    amount: 40.99,
    date: new Date("2022-06-15"),
  },
  {
    id: "e5",
    description: "My food",
    amount: 20.19,
    date: new Date("2022-06-10"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  if (action.type === "ADD") {
    const id = new Date().toString() + Math.random().toString();
    return [{ ...action.payload, id }, ...state];
  }
  if (action.type === "UPDATE") {
    const updatableExpenseIndex = state.findIndex(
      (expense) => expense.id === action.payload.id
    );

    const updatableExpense = state[updatableExpenseIndex];
    const updateItem = { ...updatableExpense, ...action.payload.data };
    const updatedExpenses = [...state];
    updatedExpenses[updatableExpenseIndex] = updateItem;
    return updatedExpenses;
  }
  if (action.type === "DELETE") {
    return state.filter((expense) => expense.id !== action.payload);
  }
  return state;
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, exenseData) => [
    dispatch({ type: "UPDATE", payload: { id: id, expenseData: expenseData } }),
  ];

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
