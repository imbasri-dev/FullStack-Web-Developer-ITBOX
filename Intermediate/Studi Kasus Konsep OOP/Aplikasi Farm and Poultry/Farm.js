const { publicDecrypt } = require("crypto");
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

        let poultries = tempData.map((data) => {
            let [id, category, price, isMature] = data;
            switch (category) {
                case "chicken":
                    return new Chicken(id, +price, isMature);
                case "duck":
                    return new Duck(id, +price, isMature);
                case "turykey":
                    return new Turkey(id, +price, isMature);
                case "quail":
                    return new Quail(id, +price, isMature);
                default:
                    return new Other(id, +price, isMature);
            }
        });
        // console.log(poultries);
        return poultries;
    }
    static total() {
        let poultries = this.readCSV();
        let count = {
            chicken: 0,
            duck: 0,
            turkey: 0,
            quail: 0,
            other: 0,
        };

        poultries.forEach((poultry) => {
            let { category } = poultry;
            switch (category) {
                case "chicken":
                    count.chicken++;
                    break;
                case "duck":
                    count.duck++;
                    break;
                case "turkey":
                    count.turkey++;
                    break;
                case "quail":
                    count.quail++;
                    break;
                default:
                    count.other++;
                    break;
            }
        });
        console.log("Total Poultries :");
        console.log(`Chicken ${count.chicken} pcs`);
        console.log(`Duck ${count.duck} pcs`);
        console.log(`Turkey ${count.turkey} pcs`);
        console.log(`Quail ${count.quail} pcs`);
        console.log(`Other ${count.other} pcs`);
    }

    static addPoultry(category, price) {
        let poultries = this.readCSV();
        let id = poultries[poultries.length - 1].id + 1;
        switch (category) {
            case "chicken":
                poultries.push(new Chicken(id, +price));
            case "duck":
                poultries.push(new Duck(id, +price));
            case "turykey":
                poultries.push(new Turkey(id, +price));
            case "quail":
                poultries.push(new Quail(id, +price));
            default:
                poultries.push(new Other(id, +price));
        }
        console.log(poultries);
    }
}

module.exports = Farm;
