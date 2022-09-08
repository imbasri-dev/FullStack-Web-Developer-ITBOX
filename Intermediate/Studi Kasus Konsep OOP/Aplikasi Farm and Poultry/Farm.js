const fs = require("fs");
const { Chicken, Duck, Turkey, Quail, Other } = require("./Poultry");

class Farm {
    static readCSV() {
        let temp = fs.readFileSync("./poultries.csv", "utf8");
        let tempSplit = temp.split("\n");
        let tempData = [];
        for (let i = 1; i < tempSplit.length; i++) {
            tempData.push(tempSplit[i].split(","));
        }
        console.log(tempData);
    }
}

module.exports = Farm;
