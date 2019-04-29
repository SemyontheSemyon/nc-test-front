export class Question {
  id?: number;
  text: string;
  type: string;
  answers: string[];
  correctAnswer?: string;
  userAnswer?: string;
  speciality?: string;
}
