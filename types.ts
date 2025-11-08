
export interface Section {
  title: string;
  content: string; // This will contain HTML content
}

export interface Exercise {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

export interface Chapter {
  title: string;
  arabicTitle: string;
  sections: Section[];
  exercises?: Exercise[];
}