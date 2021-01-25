import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { Question } from './Question';
import Quiz from './Quiz.json';

interface INavigationParams {
   name: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IState {
   quiz: IQuiz;
   questionIndex: number;
}

export class QuizComponent extends React.Component<IProps, IState> {
   // 1. Vragen ophalen
   // 2. Bijhouden waar we zijn (navigatie van gebruiker)
   // 3. View initieren voor de vragen en antwoorden
   // 4. De gebruiker weer wegleiden

   public eventHandlers = {
      nextQuestion: () => this.nextQuestion(),
      navigateToNextScreen: () => this.navigateToNextScreen(),
   };

   state: IState;

   constructor(props: IProps) {
      super(props);

      this.state = {
         quiz: null,
         questionIndex: 0,
      };
   }

   public render() {
      if (this.state.quiz === null) {
         return <Text>Bezig met laden</Text>;
      }
      const question = this.state.quiz.questions[this.state.questionIndex];
      return (
         <>
            <Question question={question} />
            <TouchableOpacity onPress={this.eventHandlers.nextQuestion}>
               <Text>Volgende vraag</Text>
            </TouchableOpacity>
         </>
      );
   }

   public componentDidMount() {
      this.loadQuiz();
   }

   public loadQuiz() {
      this.setState({ quiz: Quiz.quiz });
   }

   navigateToNextScreen() {
      this.props.navigation.navigate('Home');
   }

   public nextQuestion() {
      if (this.state.questionIndex <= (this.state.quiz.questions.length - 2)) {
         this.setState({ questionIndex: (this.state.questionIndex + 1) });
      } else {
         this.navigateToNextScreen();
      }
   }
}

export default QuizComponent;
