import { StatusBar } from "expo-status-bar";

//import navigation container
import { NavigationContainer } from "@react-navigation/native";
// navigation stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//bottom tabs navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Recent Expenses" component={RecentExpenses} />
      <BottomTabs.Screen name="All Expenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Expenses Overview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
