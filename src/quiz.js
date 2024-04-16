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
    return this.questions[this.currentQuestionIndex];
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
    if (answer === this.questions[this.currentQuestionIndex].answer) {
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

     //DAY 2

 
    //PARTE 1: 
  

  filterQuestionsByDifficulty(difficulty) {

    let filteredQuestions = this.questions.filter((eachQuestion) => {
      if (eachQuestion.difficulty >= 1 && eachQuestion.difficulty <= 3) {
        return true;
      } else {
        return false;
      }
    });
    return filteredQuestions;
  }

  /* 
    PARTE 2: 
    Implement method averageDifficulty():
See Instructions
In the src/Quiz.js file, implement the averageDifficulty() method.
You should use the reduce() method to sum the difficulty of all the questions and then divide the sum by the number of questions to get the average difficulty.
averageDifficulty() method:
should be defined.
should be a function.
should receive no arguments.
should return the average difficulty (number) of the questions in the quiz
*/

  averageDifficulty() {
    //SUMAR DIFICULTAD (1 A 3) DE TODAS LAS PREGUNTAS/SUMA DEL NÚMERO DE PREGUNTAS (   this.questions.length   )
  }
}
