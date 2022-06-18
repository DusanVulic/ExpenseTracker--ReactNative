import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "added expense" : "add new expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>Manage Expenses</Text>
    </View>
  );
};

export default ManageExpense;
