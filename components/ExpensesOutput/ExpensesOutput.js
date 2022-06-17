import { View, Text, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";

//components
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "pair of shoes",
    amount: 59.99,
    date: new Date("2022-6-17"),
  },
  {
    id: "e2",
    description: "gym pass",
    amount: 29.99,
    date: new Date("2022-5-18"),
  },
  {
    id: "e3",
    description: "supplements",
    amount: 79.99,
    date: new Date("2022-6-15"),
  },
  {
    id: "e4",
    description: "Bugsy's food",
    amount: 40.99,
    date: new Date("2022-6-15"),
  },
  {
    id: "e5",
    description: "my food",
    amount: 20.19,
    date: new Date("2022-6-10"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
