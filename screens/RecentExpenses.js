import { View, Text } from "react-native";
//component
import ExpensesOutput from "./../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
};

export default RecentExpenses;
