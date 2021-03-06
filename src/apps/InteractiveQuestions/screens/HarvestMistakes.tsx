import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import * as Icon from "react-native-feather";

interface INavigationParams {
  Location: string;
  Greenhouse: string;
  Path: string;
  Employee: string;
  Color: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IState {
  Sneetje: number;
  Buts: number;
  TeBont: number;
  RafeligeSteel: number;
  Blad: number;
  VruchtVergeten: number;
  VruchtOpGrond: number;
  KarNietSchoon: number;
  Overig: String;

  Location: string;
  Greenhouse: string;
  Path: string;
  Employee: string;
  Color: string;
}

export class HarvestMistakes extends React.Component<IProps, IState> {
  public eventHandlers = {
    navigateToHarvestOverview: () => this.navigateToHarvestOverview(),
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      Sneetje: 0,
      Buts: 0,
      TeBont: 0,
      RafeligeSteel: 0,
      Blad: 0,
      VruchtVergeten: 0,
      VruchtOpGrond: 0,
      KarNietSchoon: 0,
      Overig: '',

      Location: `${this.props.route.params.Location}`,
      Greenhouse: `${this.props.route.params.Greenhouse}`,
      Path: `${this.props.route.params.Path}`,
      Employee: `${this.props.route.params.Employee}`,
      Color: `${this.props.route.params.Color}`,
    };
  }

  public render() {
    const { Overig } = this.state.Overig;    
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.subTitle}>Sneetje</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.Sneetje}</Text>
            <TouchableOpacity onPress={() => this.removeSneetje()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addSneetje()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Buts</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.Buts}</Text>
            <TouchableOpacity onPress={() => this.removeButs()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addButs()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Te Bont</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.TeBont}</Text>
            <TouchableOpacity onPress={() => this.removeTeBont()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addTeBont()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Rafelige Steel</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.RafeligeSteel}</Text>
            <TouchableOpacity onPress={() => this.removeRafeligeSteel()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addRafeligeSteel()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Blad</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.Blad}</Text>
            <TouchableOpacity onPress={() => this.removeBlad()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addBlad()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Vrucht vergeten</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.VruchtVergeten}</Text>
            <TouchableOpacity onPress={() => this.removeVruchtVergeten()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addVruchtVergeten()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Vrucht op grond</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.VruchtOpGrond}</Text>
            <TouchableOpacity onPress={() => this.removeVruchtOpGrond()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addVruchtOpGrond()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>Kar niet schoon</Text>
          <View style={styles.positionCount}>
            <Text style={styles.count}>{this.state.KarNietSchoon}</Text>
            <TouchableOpacity onPress={() => this.removeKarNietSchoon()} style={{ paddingLeft: 10 }}>
              <Icon.MinusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.addKarNietSchoon()} style={{ paddingLeft: 10 }}>
              <Icon.PlusCircle stroke="green" fill="#fff" width={50} height={50} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: 50 }}>
          <TouchableOpacity onPress={this.eventHandlers.navigateToHarvestOverview}>
            <Text style={styles.title}>NAAR OVERZICHT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onChangeOverige(text: string) {
    this.setState({ Overig: text });
  }

  navigateToHarvestOverview() {    
    this.props.navigation.navigate('HarvestOverview', {Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
      Employee: this.state.Employee, Color: this.state.Color, Sneetje: this.state.Sneetje, Buts: this.state.Buts, TeBont: this.state.TeBont,
      RafeligeSteel: this.state.RafeligeSteel, Blad: this.state.Blad, VruchtOpGrond: this.state.VruchtOpGrond, VruchtVergeten: this.state.VruchtVergeten,
      KarNietSchoon: this.state.KarNietSchoon});
  }

  addSneetje() {
    this.setState({ Sneetje: (this.state.Sneetje + 1) })
  }

  removeSneetje() {
    if (this.state.Sneetje >= 1) {
      this.setState({ Sneetje: (this.state.Sneetje - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }

  addButs() {
    this.setState({ Buts: (this.state.Buts + 1) })
  }

  removeButs() {
    if (this.state.Buts >= 1) {
      this.setState({ Buts: (this.state.Buts - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }

  addTeBont() {
    this.setState({ TeBont: (this.state.TeBont + 1) })
  }

  removeTeBont() {
    if (this.state.TeBont >= 1) {
      this.setState({ TeBont: (this.state.TeBont - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }

  addRafeligeSteel() {
    this.setState({ RafeligeSteel: (this.state.RafeligeSteel + 1) })
  }

  removeRafeligeSteel() {
    if (this.state.RafeligeSteel >= 1) {
      this.setState({ RafeligeSteel: (this.state.RafeligeSteel - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }

  addBlad() {
    this.setState({ Blad: (this.state.Blad + 1) })
  }

  removeBlad() {
    if (this.state.Blad >= 1) {
      this.setState({ Blad: (this.state.Blad - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }

  addVruchtVergeten() {
    this.setState({ VruchtVergeten: (this.state.VruchtVergeten + 1) })
  }

  removeVruchtVergeten() {
    if (this.state.VruchtVergeten >= 1) {
      this.setState({ VruchtVergeten: (this.state.VruchtVergeten - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }

  addVruchtOpGrond() {
    this.setState({ VruchtOpGrond: (this.state.VruchtOpGrond + 1) })
  }

  removeVruchtOpGrond() {
    if (this.state.VruchtOpGrond >= 1) {
      this.setState({ VruchtOpGrond: (this.state.VruchtOpGrond - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }

  addKarNietSchoon() {
    this.setState({ KarNietSchoon: (this.state.KarNietSchoon + 1) })
  }

  removeKarNietSchoon() {
    if (this.state.KarNietSchoon >= 1) {
      this.setState({ KarNietSchoon: (this.state.KarNietSchoon - 1) })
    } else {
      console.log("spint staat op 0");
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderColor: 'green',
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  count: {
    fontSize: 28,
    paddingLeft: 20,
  },
  positionCount: {
    alignItems: "center",
    flexDirection: 'row',
    position: "absolute",
    paddingLeft: 210,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontSize: 28,
  }
});