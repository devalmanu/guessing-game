class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessNum = Math.ceil((this.min + this.max) / 2);
        return this.guessNum;
    }

    lower() {
        this.max = this.guessNum;
        this.guess();
    }

    greater() {
        this.min = this.guessNum;
        this.guess();
    }
}

module.exports = GuessingGame;
