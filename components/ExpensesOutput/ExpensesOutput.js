import { View, StyleSheet } from "react-native";

//import colors
import { GlobalStyles } from "./../../constants/styles";

//components
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Pair of shoes",
    amount: 59.99,
    date: new Date("2022-6-17"),
  },
  {
    id: "e2",
    description: "Gym pass",
    amount: 29.99,
    date: new Date("2022-5-18"),
  },
  {
    id: "e3",
    description: "Supplements",
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
    description: "My food",
    amount: 20.19,
    date: new Date("2022-6-10"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
