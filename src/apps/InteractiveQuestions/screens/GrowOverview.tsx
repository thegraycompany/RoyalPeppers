import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  Location: string;
  Greenhouse: string;
  Path: string;
  Employee: string;
  Sneetje: any;
  Buts: any;
  TeBont: any;
  RafeligeSteel: any;
  Blad: any;
  VruchtVergeten: any;
  VruchtOpGrond: any;
  KarNietSchoon: any;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IState {
  KopGebroken: any,
  KopVergeten: any,
  StrakGedraaid: any,
  TopNietGedraaid: any,
  VruchtOpDeGrond: any,
  BloemVruchtEraf: any,
  PlaagNietGemeld: any,

  Location: string;
  Greenhouse: string;
  Path: string;
  Employee: string;
}

export class GrowOverview extends React.Component<IProps, IState> {
  public eventHandlers = {
    onSendGrow: () => this.onSendGrow(),
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      KopGebroken: `${this.props.route.params.KopGebroken}`,
      KopVergeten: `${this.props.route.params.KopVergeten}`,
      StrakGedraaid: `${this.props.route.params.StrakGedraaid}`,
      TopNietGedraaid: `${this.props.route.params.TopNietGedraaid}`,
      VruchtOpDeGrond: `${this.props.route.params.VruchtOpDeGrond}`,
      BloemVruchtEraf: `${this.props.route.params.BloemVruchtEraf}`,
      PlaagNietGemeld: `${this.props.route.params.PlaagNietGemeld}`,

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Employee: `${this.props.route.params.Employee}`,
    };
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
            <View style={styles.container}>
              <Text style={styles.title}>{this.state.Employee}</Text>
            </View>
          </View>

          <View style={styles.superContainer}>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kop gebroken</Text>
              <Text style={styles.waarde}>{this.state.KopGebroken}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Kop vergeten</Text>
              <Text style={styles.waarde}>{this.state.KopVergeten}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Te strak gedraaid</Text>
              <Text style={styles.waarde}>{this.state.StrakGedraaid}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Top niet gedraaid</Text>
              <Text style={styles.waarde}>{this.state.TopNietGedraaid}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Vrucht op de grond</Text>
              <Text style={styles.waarde}>{this.state.VruchtOpDeGrond}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Bloem vrucht eraf</Text>
              <Text style={styles.waarde}>{this.state.BloemVruchtEraf}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.subTitle}>Plaag niet gemeld</Text>
              <Text style={styles.waarde}>{this.state.PlaagNietGemeld}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity onPress={this.eventHandlers.onSendGrow}>
              <Text style={styles.title}>OPSLAAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  onSendGrow() {
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
  waarde: {
    position: "absolute",
    paddingLeft: 350,
    fontSize: 24,
  }
});