import { View, Text } from "react-native";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>Expenses Output {periodName}</Text>
      <Text> $ : {expenseSum.toFixed(2)} </Text>
    </View>
  );
};

export default ExpensesSummary;
