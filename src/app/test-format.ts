export class TestFormat {

  id: number;
  numberOfQuestions: number;
  time: number;
  threshold: number;


  constructor(id: number, numberOfQuestions: number, time: number, threshold: number) {
    this.id = id;
    this.numberOfQuestions = numberOfQuestions;
    this.time = time;
    this.threshold = threshold;
  }
}
