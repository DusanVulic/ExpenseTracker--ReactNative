import { View, Text, StyleSheet } from "react-native";
//import input
import Input from "./Input";
import { GlobalStyles } from "./../../constants/styles";
import { useState } from "react";
// import button

import Button from "../UI/Button";

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangedHandler = (inputIndentifier, enteredValue) => {
    setInputValues((currInputValues) => {
      return { ...currInputValues, [inputIndentifier]: enteredValue };
    });
  };

  const submitHandler = () => {};
  return (
    <View style={styles.form}>
      <Text style={styles.title}> Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          //additional style
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
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
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttonContainer}>
        <Button style={styles.buttonStyle} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.buttonStyle} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
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
