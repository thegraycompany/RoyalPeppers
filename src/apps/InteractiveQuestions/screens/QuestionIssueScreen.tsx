import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  name: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

export class QuestionIssueScreen extends React.Component<IProps> {
  public eventHandlers = {
    navigateToNextScreen: (suffers: boolean) => this.props.navigation.navigate('VraagAntwoord', { suffers }),
  };

  public render() {
    return (
      <View>
        <Text>Ik heb af en toe last van mijn buik</Text>
        <Text>Heb jij dit soms ook?</Text>
        <Image source={require('/home/kvdb/MyApp/assets/icon.png')} />
        <TouchableOpacity onPress={() => this.eventHandlers.navigateToNextScreen(true)}>
          <Text>Ja</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.eventHandlers.navigateToNextScreen(false)}>
          <Text>Nee</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
