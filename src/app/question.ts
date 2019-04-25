export class Question {
  text: string;
  type: string;
  answers: string[];
  userAnswer?: string;
  correct?: boolean;
}
