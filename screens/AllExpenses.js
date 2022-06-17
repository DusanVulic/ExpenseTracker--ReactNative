import { View, Text } from "react-native";
//component
import ExpensesOutput from "./../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod="total" />;
};

export default AllExpenses;
