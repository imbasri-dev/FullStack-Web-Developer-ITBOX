const { Income, Expense } = require("./IncomeExpense");
const fs = require("fs");
class Note {
    // constructor(list) {
    //     this.list = list || [];
    // }
    // addIncome(name, total) {
    //     let income = new Income(name, total, "Income");
    //     this.list.push(income);
    // }
    // addExpense(name, total) {
    //     let expense = new Expense(name, total, "Expense");
    //     this.list.push(expense);
    // }
    // listIncome() {
    //     console.log("List Income : ");
    //     this.list.forEach((inc) => {
    //         if (inc.category === "Income") {
    //             console.log(`${inc.name}, Rp.${inc.total} `);
    //         }
    //     });
    // }
    // listExpense() {
    //     console.log("List Expense : ");
    //     this.list.forEach((exp) => {
    //         if (exp.category === "Expense") {
    //             console.log(`${exp.name}, Rp.${exp.total} `);
    //         }
    //     });
    // }
    // balance() {
    //     let totalIncome = 0;
    //     let totalExpense = 0;
    //     this.list.forEach((el) => {
    //         if (el.category === "Income") {
    //             totalIncome += el.total;
    //         } else if (el.category === "Expense") {
    //             totalExpense += el.total;
    //         }
    //     });
    //     // Status : plus,minus,balance
    //     let total = totalIncome - totalExpense;
    //     if (total === 0) {
    //         console.log("Status : Balanced!");
    //     } else if (total < 0) {
    //         console.log(`Status : Minus!,  Uang Rp.${total}`);
    //     } else if (total > 0) {
    //         console.log(`Status : Plus!,  Uang Rp.${total}`);
    //     }
    // }

    static listIncome() {
        let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
        let incomes = temp.incomes;
        console.log("List Income : ");
        incomes.forEach((income) => {
            const { name, total } = income;
            console.log(`${name} ${total}`);
        });
    }

    static listExpense() {
        let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
        let expenses = temp.expenses;
        console.log("List Expense : ");
        expenses.forEach((expense) => {
            const { name, total } = expense;
            console.log(`${name} ${total}`);
        });
    }

    static addIncome(name, total) {
        let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
        let income = new Income(name, total, "income");
        temp.incomes.push(income);
        // console.log(temp);
        this.save(temp);
    }
    static addExpense(name, total) {
        let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
        let expense = new Expense(name, total, "expense");
        temp.expenses.push(expense);
        // console.log(temp);
        this.save(temp);
    }

    static balance() {
        let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
        let totalIncome = 0;
        let totalExpense = 0;
        temp.incomes.forEach((income) => {
            totalIncome += income.total;
        });
        temp.expenses.forEach((expense) => {
            totalExpense += expense.total;
        });

        // Status : plus,minus,balance
        let total = totalIncome - totalExpense;
        if (total === 0) {
            console.log("Status : Balanced!");
        } else if (total < 0) {
            console.log(`Status : Minus!,  Uang Rp.${total}`);
        } else if (total > 0) {
            console.log(`Status : Plus!,  Uang Rp.${total}`);
        }
    }
    static save(data) {
        fs.writeFileSync(".//data.json", JSON.stringify(data, null, 3));
    }
}
module.exports = Note;
