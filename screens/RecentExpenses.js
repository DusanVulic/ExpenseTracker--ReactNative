//component
import ExpensesOutput from "./../components/ExpensesOutput/ExpensesOutput";

//import context

import { ExpensesContext } from "../store/expenses-context";
import { useContext, useEffect, useState } from "react";
//date function
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
// spinner componenta
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getEpenses = async () => {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    };
    getEpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpences = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpences}
      expensesPeriod="Last 7 days"
      fallBackText="no expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
