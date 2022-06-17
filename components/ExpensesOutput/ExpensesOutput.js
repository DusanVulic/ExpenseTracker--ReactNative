import { View, Text, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";

//components
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
