import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { DiabetesInfo } from './src/apps/InteractiveQuestions/screens/DiabetesInfo';
import { DiabetesStart } from './src/apps/InteractiveQuestions/screens/DiabetesStart';
import { HomeScreen } from './src/apps/InteractiveQuestions/screens/HomeScreen';
import { QuestionAgeScreen } from './src/apps/InteractiveQuestions/screens/QuestionAgeScreen';
import { QuestionDetailScreen } from './src/apps/InteractiveQuestions/screens/QuestionDetailScreen';
import { QuestionIssueYesScreen } from './src/apps/InteractiveQuestions/screens/QuestionIssueAwnserScreen';
import { QuestionIssueScreen } from './src/apps/InteractiveQuestions/screens/QuestionIssueScreen';
import NewQuizHome from './src/apps/Quiz/screens/NewQuizHome';
import QuizHome from './src/apps/Quiz/screens/QuizHome';

import { HarvestScreen } from './src/apps/InteractiveQuestions/screens/HarvestScreen';
import { HarvestMistakes } from './src/apps/InteractiveQuestions/screens/HarvestMistakes';
import { HarvestOverview } from './src/apps/InteractiveQuestions/screens/HarvestOverview';

import { GrowScreen } from './src/apps/InteractiveQuestions/screens/GrowScreen';
import { GrowMistakes } from './src/apps/InteractiveQuestions/screens/GrowMistakes';
import { GrowOverview } from './src/apps/InteractiveQuestions/screens/GrowOverview';

import { ScoutScreen } from './src/apps/InteractiveQuestions/screens/ScoutScreen';
import { ScoutMistakes } from './src/apps/InteractiveQuestions/screens/ScoutMistakes';
import { ScoutOverview } from './src/apps/InteractiveQuestions/screens/ScoutOverview';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="QuestionDetail" component={QuestionDetailScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="AgeScreen" component={QuestionAgeScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        
        <Stack.Screen name="HarvestScreen" component={HarvestScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="HarvestMistakes" component={HarvestMistakes} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="HarvestOverview" component={HarvestOverview} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        
        <Stack.Screen name="GrowScreen" component={GrowScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="GrowMistakes" component={GrowMistakes} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="GrowOverview" component={GrowOverview} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
     
        <Stack.Screen name="ScoutScreen" component={ScoutScreen} options={{title: 'Scouten', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="ScoutMistakes" component={ScoutMistakes} options={{title: 'Scouten Controle', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="ScoutOverview" component={ScoutOverview} options={{title: 'Scouten Overzicht', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
     
        <Stack.Screen name="Vraag" component={QuestionIssueScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="VraagAntwoord" component={QuestionIssueYesScreen} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="leesMeer" component={DiabetesStart} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="Diabetes" component={DiabetesInfo} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="OmgaanDiabetes" component={DiabetesInfo} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="QuizHome" component={QuizHome} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
        <Stack.Screen name="NewQuizHome" component={NewQuizHome} options={{title: 'GreenHouse Excellence', headerStyle: {backgroundColor: '#228B22'}, headerTitleStyle: {color: '#fff'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
