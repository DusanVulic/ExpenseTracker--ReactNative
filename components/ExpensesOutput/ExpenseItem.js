import { Pressable, View, Text, StyleSheet } from "react-native";
//importing colors
import { GlobalStyles } from "./../../constants/styles";
//import date function from utils
import { getFormatedDate } from "./../../util/date";

//use navigation hook
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ description, amount, date }) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate("ManageExpense");
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.item}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    //IOS shadow
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingHorizontal: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
