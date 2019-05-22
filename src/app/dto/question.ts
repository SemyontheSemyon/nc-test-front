export class Question {
  id?: number;
  text: string;
  type: string;
  answers?: string[];
  correctAnswer?;
  studentAnswer?: string[];
  speciality?: string;
}
