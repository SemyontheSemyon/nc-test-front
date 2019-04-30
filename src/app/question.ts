export class Question {
  id?: number;
  text: string;
  type: string;
  answers: string[];
  correctAnswer?: string;
  studentAnswer?: string;
  speciality?: string;
}
