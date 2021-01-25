import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
    naam: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

export class QuestionIssueYesScreen extends React.Component<IProps> {
  public eventHandlers = {
    navigateToNextScreen: () => this.navigateToNextScreen(),
  };

  public render() {
    return (
      <View>
        <Text>{this.props.route.params.suffers ? 'Dat is vervelend he!' : 'Daar ben ik heel blij om!'}</Text>
        <Image source={require('/home/kvdb/MyApp/assets/icon.png')} />
        <Text>Lees hier wat je moet doen als je last krijgt</Text>
        <TouchableOpacity onPress={this.eventHandlers.navigateToNextScreen}>
          <Text>Lees verder</Text>
        </TouchableOpacity>
      </View>
    );
  }
  navigateToNextScreen() {
        this.props.navigation.navigate('leesMeer');
      }
    }
