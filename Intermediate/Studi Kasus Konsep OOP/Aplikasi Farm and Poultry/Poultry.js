class Poultry {
    constructor(id, category, price) {
        this.id = id;
        this.category = category || "";
        this.price = price || 0;
    }
}
class Chicken extends Poultry {
    constructor(id, price) {
        super(id, "chicken", price);
    }
}

class Duck extends Poultry {
    constructor(id, price) {
        super(id, "duck", price);
    }
}
class Turkey extends Poultry {
    constructor(id, price) {
        super(id, "turkey", price);
    }
}
class Quail extends Poultry {
    constructor(id, price) {
        super(id, "quail", price);
    }
}
class Other extends Poultry {
    constructor(id, price) {
        super(id, "other", price);
    }
}

module.exports = {
    Chicken,
    Duck,
    Turkey,
    Quail,
    Other,
};
