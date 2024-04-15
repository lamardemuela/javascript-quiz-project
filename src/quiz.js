class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. method getQuestion()

  getQuestion() {
    let currentQuestion = this.questions[this.currentQuestionIndex];

    return currentQuestion;
  }

  // 3. moveToNextQuestion()

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  // 4. shuffleQuestions()

  shuffleQuestions() {
    this.questions.sort(() => Math.random() - this.questions.length);
  }

  // 5. checkAnswer(answer)

  checkAnswer(answer) {


    if (answer === currentQuestion.answer) {
      this.correctAnswers++;
    }
  }  

  // 6. hasEnded()

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }
}
