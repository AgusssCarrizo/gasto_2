import inquirer from "inquirer";
import { get, save } from "./filesMethods.js";
import { PromptNewExpenses } from "./gastosPrompts.js";

const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Qué desea hacer?",
        choices: [
          { value: 1, name: "Agregar un gasto" },
          { value: 2, name: "Ver todos los gastos" },

          { value: 99, name: "Salir" },
        ],
      },
    ]);
    switch (action.chosen) {
      case 1:
        await createNewExpenses();
        break;
      case 2:
        await getAllExpenses();
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("Hasta luego, recuerde ahorrar.");
};
main();

async function createNewExpenses() {
  console.log("Agregando nuevo gasto...");
  const newExpenseData = await PromptNewExpenses();
  console.log("creando:", newExpenseData);
  const currentExpenditure = await get("expenses");
  currentExpenditure.push(newExpenseData);
  await save("expenses", currentExpenditure);
}
async function getAllExpenses() {
  const currentExpenditure = await get("expenses");
  console.log(currentExpenditure);
}
