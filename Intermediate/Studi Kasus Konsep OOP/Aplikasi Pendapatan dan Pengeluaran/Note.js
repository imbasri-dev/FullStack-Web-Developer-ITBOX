const { Income, Expense } = require("./IncomeExpense");

class Note {
    constructor(list) {
        this.list = list || [];
    }

    addIncome(name, total) {
        let income = new Income(name, total, "Income");
        this.list.push(income);
    }
    addExpense(name, total) {
        let expense = new Expense(name, total, "Expense");
        this.list.push(expense);
    }
    listIncome() {
        console.log("List Income : ");
        this.list.forEach((inc) => {
            if (inc.category === "Income") {
                console.log(`${inc.name}, Rp.${inc.total} `);
            }
        });
    }
    listExpense() {
        console.log("List Expense : ");
        this.list.forEach((exp) => {
            if (exp.category === "Expense") {
                console.log(`${exp.name}, Rp.${exp.total} `);
            }
        });
    }
    balance() {
        let totalIncome = 0;
        let totalExpense = 0;
        this.list.forEach((el) => {
            if (el.category === "Income") {
                totalIncome += el.total;
            } else if (el.category === "Expense") {
                totalExpense += el.total;
            }
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
}

module.exports = Note;
