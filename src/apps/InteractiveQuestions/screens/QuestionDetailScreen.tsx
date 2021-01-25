import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  name: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IState {
  nameInput: string;
}

export class QuestionDetailScreen extends React.Component<IProps, IState> {
  public eventHandlers = {
    onChangeText: (text: string) => this.onChangeText(text),
    onPress: () => this.onPress(),
    navigateToHarvest: () => this.navigateToHarvest(),
    navigateToGrow: () => this.navigateToGrow(),
    navigateToScout: () => this.navigateToScout(),

  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      nameInput: '',
    };
  }

  public render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.eventHandlers.navigateToHarvest}>
            <Text style={styles.title}>OOGSTEN</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={this.eventHandlers.navigateToGrow}>
            <Text style={styles.title}>TOPPEN/DRAAIEN</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={this.eventHandlers.navigateToScout}>
            <Text style={styles.title}>SCOUTEN</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  navigateToHarvest() {
    this.props.navigation.navigate('HarvestScreen');
  }
  navigateToGrow() {
    this.props.navigation.navigate('GrowScreen');
  }
  navigateToScout() {
    this.props.navigation.navigate('ScoutScreen');
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "#5bbc51",
    marginHorizontal: 16,
    borderRadius: 15,
    height: 100,
    marginBottom: 30,
    marginTop: 80,
    borderWidth: 2,
    borderColor: "green"
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 32,
    color: "#fff",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});