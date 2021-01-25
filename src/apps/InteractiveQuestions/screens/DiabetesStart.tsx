import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  naam: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

export class DiabetesStart extends React.Component<IProps> {
  public eventHandlers = {
    onPressDiabetes: () => this.onPressDiabetes(),
    onPressDiabetesOmgaan: () => this.onPressDiabetesOmgaan(),
    onPressDiabetesLeesMeer: () => this.onPressDiabetesLeesMeer(),
  };

  public render() {
    return (
      <View >
        <TouchableOpacity onPress={this.eventHandlers.onPressDiabetes}>
          <Text>Wat is Diabetes?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.eventHandlers.onPressDiabetesOmgaan}>
          <Text>Hoe kan ik met diabetes omgaan?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.eventHandlers.onPressDiabetesOmgaan}>
          <Text>Lees verder</Text>
        </TouchableOpacity>
      </View>
    );
  }
  onPressDiabetes() {
    this.props.navigation.navigate('Diabetes');
  }

  onPressDiabetesOmgaan() {
    this.props.navigation.navigate('OmgaanDiabetes');
  }

  onPressDiabetesLeesMeer() {
    this.props.navigation.navigate('leesMeer');
  }
}
