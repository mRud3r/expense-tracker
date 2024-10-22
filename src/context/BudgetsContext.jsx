import { createContext, useContext, } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContext = createContext()

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized'

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage('budgets', []);
    const [expenses, setExpenses] = useLocalStorage('expenses', []);

 const getBudgetExpenses = (budgetId) => {
    return expenses.filter(expense => expense.budgetId === budgetId)
 }

 const addBudget = ({name, max}) => {
    setBudgets(prevBudgets => {
        if (prevBudgets.find(budget => budget.name === name)) {
            return prevBudgets
        }
        return [...prevBudgets,{ id: uuidV4(), name, max }]
    })
 }

 const addExpense = ({ description, amount, budgetId }) => {
    setExpenses(prevExpenses => {
        return [...prevExpenses,{ id: uuidV4(), description, amount, budgetId }]
    })
 }

 const deleteBudget = (budgetId) => {
    setBudgets(prevBudgets => {
        return prevBudgets.filter(budget => budget.id !== budgetId);
      });
    
      setExpenses(prevExpenses => {
        return prevExpenses.map(expense => {
          if (expense.budgetId === budgetId) {
            return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID }; // Przeniesienie do 'Uncategorized'
          }
          return expense;
        });
      });
 }

 const deleteExpense = (expenseId) => {
    setExpenses(prevExpenses => {
        return prevExpenses.filter(expense => expense.id !== expenseId);
      });
 }





    return <BudgetsContext.Provider value={{addBudget, budgets, expenses, getBudgetExpenses, addExpense, deleteBudget, deleteExpense}}>
        {children}
    </BudgetsContext.Provider>
}