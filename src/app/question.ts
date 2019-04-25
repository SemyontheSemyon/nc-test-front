export class Question {
  text: string;
  type: string;
  answers: string[];
  correctAnswer?: string;
  userAnswer?: string;
  speciality?: string;
  correct?: boolean;
}
