/* imports */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  name: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IJdataType {
  [questionNumber: string]: {
    correctOption: string,
    options: {
      [optionNumber: string]: string,
    },
    question: string,
  };
}

let questionsArray: string | any[] = [];
const givenAnswersArray = new Array();
/* jsonQuestions */
const jsonQuestions = {
  'quiz': {
      'question1': {
        'correctOption': 'Javascript',
        'options': {
          'option1': 'Java',
          'option2': 'PHP',
          'option3': 'Javascript',
          'option4': 'IOS',
        },
        'question': 'React is a ____ library',
      },
      'question2': {
        'correctOption': 'JSX',
        'options': {
          'option1': 'XML',
          'option2': 'YML',
          'option3': 'HTML',
          'option4': 'JSX',
        },
        'question': '____ tag syntax is used in React',
      },
      'question3': {
        'correctOption': 'Single root DOM node',
        'options': {
          'option1': 'Single root DOM node',
          'option2': 'Double root DOM node',
          'option3': 'Multiple root DOM node',
          'option4': 'None of the above',
        },
        'question': 'Application built with just React usually have ____',
      },
      'question4': {
        'correctOption': 'immutable',
        'options': {
          'option1': 'mutable',
          'option2': 'immutable',
          'option3': 'placeholder',
          'option4': 'placeholder',
        },
        'question': 'React elements are ____',
      },
      'question5': {
        'correctOption': 'components',
        'options': {
          'option1': 'functions',
          'option2': 'array',
          'option3': 'components',
          'option4': 'json data',
        },
        'question': 'React allows to split UI into independent and reusable pieses of ____',
      },
  },
};

/* class quizhome */
/* inside quizhome functions => funcNext, funcPrev, funcAnswerCheck */
export default class QuizHome extends React.Component<IProps> {
  public eventHandlers = {
    previousQuestion: () => this.previousQuestion(),
    checkAnswer: (answerGiven: string) => this.checkAnswer(answerGiven),
  };

  qno: number = 0;
  public componentDidMount() {
    this.qno = 0;

    const jdata: IJdataType = jsonQuestions.quiz;
    questionsArray = Object.keys(jdata).map((k) => jdata[k]);
    this.state = {
      question: questionsArray[this.qno].question,
      options: questionsArray[this.qno].options,
      correctOption: questionsArray[this.qno].correctOption,
      countCheck: 0,
    };
  }

  quizFinish() {
    console.log('test quiz finish');
  }

  previousQuestion() {
    givenAnswersArray.pop();

    if (this.qno > 0) {
      this.qno--;
      this.setState({ question: questionsArray[this.qno].question, options: questionsArray[this.qno].options, correctoption: questionsArray[this.qno].correctOption });
    }
  }

  checkAnswer(answerGiven: string) {
    if (this.state.correctOption === answerGiven) {
      givenAnswersArray.push('Goed');
    } else {
      givenAnswersArray.push('Fout');
    }

    if (this.qno < questionsArray.length - 1) {
      this.qno++;
      this.setState(
        {
          countCheck: 0,
          question: questionsArray[this.qno].question,
          options: questionsArray[this.qno].options,
          correctoption: questionsArray[this.qno].correctOption,
        });
    } else {
      this.quizFinish();
    }

    console.log(givenAnswersArray);
  }

  public render() {
    const jdata: IJdataType = jsonQuestions.quiz;

    questionsArray = Object.keys(jdata).map((k) => jdata[k]);
    this.state = {
      question: questionsArray[this.qno].question,
      options: questionsArray[this.qno].options,
      correctOption: questionsArray[this.qno].correctOption,
      countCheck: 0,
    };

    return (
      <View>
        <Text>{(this.qno + 1) + ') ' + this.state.question}</Text>

        <TouchableOpacity onPress={() => this.eventHandlers.checkAnswer(this.state.options.option1)}>
          <Text>{'A: ' + this.state.options.option1}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.eventHandlers.checkAnswer(this.state.options.option2)}>
          <Text>{'B: ' + this.state.options.option2}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.eventHandlers.checkAnswer(this.state.options.option3)}>
          <Text>{'C: ' + this.state.options.option3}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.eventHandlers.checkAnswer(this.state.options.option4)}>
          <Text>{'D: ' + this.state.options.option4}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.eventHandlers.previousQuestion}>
          <Text>Ga door naar het vorige vraag</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
