class Question {
    // 1. constructor (text, choices, answer, difficulty)
    constructor(text, choices, answer, difficulty) {
        this.text = text
        this.choices = choices
        this.answer = answer
        this.difficulty = difficulty
    }

    // 2. shuffleChoices()
    shuffleChoices() {
        this.choices.sort(() => Math.random() - this.choices.length);
    }
}