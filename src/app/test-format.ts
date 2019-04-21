export class TestFormat {

  id: number;
  numberOfQuestions: number;
  time: number;
  speciality: string;


  constructor(id: number, numberOfQuestions: number, time: number, speciality: string) {
    this.id = id;
    this.numberOfQuestions = numberOfQuestions;
    this.time = time;
    this.speciality = speciality;
  }
}
