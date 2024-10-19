import { createContext, useContext } from "react";

const BudgetsContext = createContext()

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    return <BudgetsContext.Provider value={{}}>
        {children}
    </BudgetsContext.Provider>
}