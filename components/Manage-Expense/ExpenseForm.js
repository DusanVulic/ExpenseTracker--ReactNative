import { View, Text, StyleSheet } from "react-native";
//import input
import Input from "./Input";
import { GlobalStyles } from "./../../constants/styles";
import { useState } from "react";

const ExpenseForm = () => {
  const [amountValue, setAmountValue] = useState("");

  const amountChangeHandler = (enteredText) => {
    setAmountValue(enteredText);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}> Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
            value: amountValue,
          }}
          //additional style
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
          //additional style
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          // default :
          //AutoCapitalize: "sentences",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
