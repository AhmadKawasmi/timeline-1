import axios from "axios";
// const EXPENSE_URI = "http://localhost:3001/expenses";
const EXPENSE_URI = "/expenses"
export const getExpenses = async function() {
    const response = await axios.get(EXPENSE_URI);
    return response.data;
};

export const addExpense = async function(expense) {
    const response = await axios.post(EXPENSE_URI, expense);
    return response.data;
};

export const deleteExpense = async function(id) {
    const response = await axios.delete(`${EXPENSE_URI}/${id}`);
    return response.data;
};