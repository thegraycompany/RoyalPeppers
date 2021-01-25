import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  age: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

export class QuestionAgeScreen extends React.Component<IProps> {
  public eventHandlers = {
    navigateToNextScreen: () => this.navigateToNextScreen(),
  };

  public render() {
    const age = this.props.route.params.age;
    return (
      <View>
        <Text>Wow ik ben ook: {age}</Text>
        <Image source={require('/home/kvdb/MyApp/assets/icon.png')} />
        <TouchableOpacity onPress={this.eventHandlers.navigateToNextScreen}>
          <Text>Ga door</Text>
        </TouchableOpacity>
      </View>
    );
  }
  navigateToNextScreen() {
    this.props.navigation.navigate('Vraag');
  }
}
