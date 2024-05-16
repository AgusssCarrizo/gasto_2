import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function PromptNewExpenses() {
  return await inquirer.prompt(newExpensesPrompt);
}

const newExpensesPrompt = [
  {
    type: "input",
    name: "name",
    message: "Ingrese lo que compró:",
  },
  {
    type: "input",
    name: "precio",
    message: "Ingrese el valor de su compra:",
  },
  {
    type: "date",
    name: "buy_date",
    message: "Ingrese su fecha de compra",
    locale: "es-AR",
    format: { month: "short", hour: undefined, minute: undefined },
  },
  {
    type: "input",
    name: "cantidad",
    message: "Ingrese la cantidad de productos:",
  },
];
