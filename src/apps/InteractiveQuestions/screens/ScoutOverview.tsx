import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  Location: string;
  Greenhouse: string;
  Path: string;
  Kas: string;
  Overig: string;

  Spint: any;
  Rups: any;
  WitteVlieg: any;
  Trips: any;
  Luis: any;
  FruitMot: any;
  Kevers: any;
  Fusarium: any;
  Pythium: any;
  MineerVlieg: any;
  Meeldauw: any;
  Wants: any;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IState {
  Location: string;
  Greenhouse: string;
  Path: string;
  Kas: string;
  Overig: string;

  Spint: any;
  Rups: any;
  WitteVlieg: any;
  Trips: any;
  Luis: any;
  FruitMot: any;
  Kevers: any;
  Fusarium: any;
  Pythium: any;
  MineerVlieg: any;
  Meeldauw: any;
  Wants: any;
}

export class ScoutOverview extends React.Component<IProps, IState> {
  public eventHandlers = {
    onChangeText: (text: string) => this.onChangeText(text),
    onSendScout: () => this.onSendScout(),
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      Spint: `${this.props.route.params.Spint}`,
      Rups: `${this.props.route.params.Rups}`,
      WitteVlieg: `${this.props.route.params.WitteVlieg}`,
      Trips: `${this.props.route.params.Trips}`,
      Luis: `${this.props.route.params.Luis}`,
      FruitMot: `${this.props.route.params.FruitMot}`,
      Kevers: `${this.props.route.params.Kevers}`,
      Fusarium: `${this.props.route.params.Fusarium}`,
      Pythium: `${this.props.route.params.Pythium}`,
      MineerVlieg: `${this.props.route.params.MineerVlieg}`,
      Meeldauw: `${this.props.route.params.Meeldauw}`,
      Wants: `${this.props.route.params.Wants}`,

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Kas: `${this.props.route.params.Kas}`,
      Overig: `${this.props.route.params.Overig}`,
    };

    console.log(this.state.Spint);
    
  }

  public render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.superContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>{this.state.Location}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>{this.state.Greenhouse}</Text>
              <Text style={styles.title}>{this.state.Path}</Text>
            </View>
          </View>

          <View style={styles.superContainer}>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Spint poot:</Text>
              <Text style={styles.subTitle}> {this.state.Spint}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Rups poot:</Text>
              <Text style={styles.subTitle}> {this.state.Rups}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Witte vlieg poot:</Text>
              <Text style={styles.subTitle}> {this.state.WitteVlieg}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Trips poot:</Text>
              <Text style={styles.subTitle}>{this.state.Trips}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Luis poot:</Text>
              <Text style={styles.subTitle}>{this.state.Luis}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Fruit Mot poot:</Text>
              <Text style={styles.subTitle}> {this.state.FruitMot}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kevers poot:</Text>
              <Text style={styles.subTitle}> {this.state.Kevers}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Fusarium poot:</Text>
              <Text style={styles.subTitle}> {this.state.Fusarium}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Pythium poot:</Text>
              <Text style={styles.subTitle}> {this.state.Pythium}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Mineer vlieg poot:</Text>
              <Text style={styles.subTitle}> {this.state.MineerVlieg}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Meeldauw poot:</Text>
              <Text style={styles.subTitle}> {this.state.Meeldauw}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Wants poot:</Text>
              <Text style={styles.subTitle}> {this.state.Wants}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kas</Text>
              <Text style={styles.subTitle}>{this.state.Kas}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Overig</Text>
              <Text style={styles.subTitle}> {this.state.Overig}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={this.eventHandlers.onSendScout}>
              <Text style={styles.title}>OPSLAAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  onChangeText(text: string) {
    this.setState({ nameInput: text });
  }

  onSendScout() {
    this.props.navigation.navigate('QuestionDetail');
  }
}

const styles = StyleSheet.create({
  superContainer: {
    borderBottomWidth: 2,
    borderColor: 'green',
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    maxWidth: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 8,
    paddingLeft: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 8,
    paddingLeft: 10,
    maxWidth: 240,
  },
});