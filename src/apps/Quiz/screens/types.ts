interface IQuestion {
    questionNumber: number;
    correctOption: string;
    options: string[];
    question: string;
}

interface IQuiz {
    questions: IQuestion[];
}

interface IQuizDataset {
    [key: string]: IQuiz;
}
