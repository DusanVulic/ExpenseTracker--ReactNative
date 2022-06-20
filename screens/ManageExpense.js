import { useContext, useLayoutEffect } from "react";

import { View, StyleSheet } from "react-native";
//import of an expense form
import ExpenseForm from "../components/Manage-Expense/ExpenseForm";

import Button from "../components/UI/Button";
//icon
import IconButton from "./../components/UI/IconButton";
//colors
import { GlobalStyles } from "./../constants/styles";

//import context
import { ExpensesContext } from "./../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "added expense" : "add new expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
    expenseCtx.deleteExpense(editedExpenseId);
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "test !!!!",
        amount: 10.22,
        date: new Date("2025-02-02"),
      });
    } else {
      expenseCtx.addExpense({
        description: "test",
        amount: 10.1,
        date: new Date("2023-01-01"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonStyle} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.buttonStyle} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
