import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  name: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

interface IState {
  Location: string;
  isVisibleLocation: boolean;

  Greenhouse: string;
  isVisibleGreenhouse: boolean;

  Path: string;
  isVisiblePath: boolean;

  Employee: string;
  isVisibleEmployee: boolean;

  Color: string;
  isVisibleColor: boolean;
}

export class HarvestScreen extends React.Component<IProps, IState> {
  public eventHandlers = {
    navigateToHarvestMistakes: () => this.navigateToHarvestMistakes(),
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      Location: 'Rilland',
      isVisibleLocation: false,

      Greenhouse: 'Kas 1',
      isVisibleGreenhouse: false,

      Path: 'Pad 1',
      isVisiblePath: false,

      Employee: 'Pietje Puk',
      isVisibleEmployee: false,

      Color: 'Groen',
      isVisibleColor: false,
    };
  }

  changeVisibility(state: any) {
    this.setState({
      isVisibleLocation: false,
      isVisibleGreenhouse: false,
      isVisiblePath: false,
      isVisibleEmployee: false,
      isVisibleColor: false,
      ...state
    });
  }

  public render() {
    return (
      <View>
        <Text style={styles.title}>
          OOGSTEN
        </Text>

        <View style={styles.dropdown}>
          <Text style={styles.subtitle}>Locatie</Text>
          <DropDownPicker
            items={[
              { label: 'Rilland', value: 'Rilland', icon: () => <Icon name="flag" size={18} color="#000" />, hidden: true },
              { label: 'Warmoeziersweg', value: 'Warmoeziersweg', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Icon name="flag" size={18} color="#000" /> },
            ]}
            defaultValue={this.state.Location}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            labelStyle={{
              fontSize: 16,
              textAlign: 'left',
              color: '#000'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', minHeight: 200 }}

            isVisible={this.state.isVisibleLocation}
            onOpen={() => this.changeVisibility({
              isVisibleLocation: true
            })}
            onClose={() => this.setState({
              isVisibleLocation: false
            })}
            onChangeItem={item => this.setState({
              Location: item.value
            })}
          />
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.subtitle}>Kas</Text>
          <DropDownPicker
            items={[
              { label: 'Kas 1', value: 'Kas 1', icon: () => <Icon name="flag" size={18} color="#000" />, hidden: true },
              { label: 'Kas 2', value: 'Kas 2', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Kas 3', value: 'Kas 3', icon: () => <Icon name="flag" size={18} color="#000" /> },
            ]}
            defaultValue={this.state.Greenhouse}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            labelStyle={{
              fontSize: 16,
              textAlign: 'left',
              color: '#000'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}

            isVisible={this.state.isVisibleGreenhouse}
            onOpen={() => this.changeVisibility({
              isVisibleGreenhouse: true
            })}
            onClose={() => this.setState({
              isVisibleGreenhouse: false
            })}
            onChangeItem={item => this.setState({
              Greenhouse: item.value
            })}
          />
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.subtitle}>Pad</Text>
          <DropDownPicker
            items={[
              { label: 'Pad 1', value: 'Pad 1', icon: () => <Icon name="flag" size={18} color="#000" />, hidden: true },
              { label: 'Pad 2', value: 'Pad 2', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 3', value: 'Pad 3', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 4', value: 'Pad 4', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 5', value: 'Pad 5', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 6', value: 'Pad 6', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 7', value: 'Pad 7', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 8', value: 'Pad 8', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 9', value: 'Pad 9', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 10', value: 'Pad 10', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 11', value: 'Pad 11', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 12', value: 'Pad 12', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 13', value: 'Pad 13', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 14', value: 'Pad 14', icon: () => <Icon name="flag" size={18} color="#000" /> },
              { label: 'Pad 15', value: 'Pad 15', icon: () => <Icon name="flag" size={18} color="#000" /> },

            ]}
            defaultValue={this.state.Path}
            searchable={true}
            searchablePlaceholder="Zoek een pad"
            searchablePlaceholderTextColor="gray"
            searchableError={() => <Text>Not Found</Text>}
            searchableStyle={{ backgroundColor: '#dfdfdf' }}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            labelStyle={{
              fontSize: 16,
              textAlign: 'left',
              color: '#000'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}

            isVisible={this.state.isVisiblePath}
            onOpen={() => this.changeVisibility({
              isVisiblePath: true
            })}
            onClose={() => this.setState({
              isVisiblePath: false
            })}
            onChangeItem={item => this.setState({
              Path: item.value
            })}
          />
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.subtitle}>Medewerker</Text>
          <DropDownPicker
            items={[
              { label: 'Pietje Puk', value: 'Pietje Puk', icon: () => <Icon name="user" size={18} color="#000" />, hidden: true },
              { label: 'Tom Thieman', value: 'Tom Thieman', icon: () => <Icon name="user" size={18} color="#000" /> },
            ]}
            defaultValue={this.state.Employee}
            searchable={true}
            searchablePlaceholder="Zoek een medewerker"
            searchablePlaceholderTextColor="gray"
            searchableError={() => <Text>Not Found</Text>}
            searchableStyle={{ backgroundColor: '#dfdfdf' }}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            labelStyle={{
              fontSize: 16,
              textAlign: 'left',
              color: '#000'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}

            isVisible={this.state.isVisibleEmployee}
            onOpen={() => this.changeVisibility({
              isVisibleEmployee: true
            })}
            onClose={() => this.setState({
              isVisibleEmployee: false
            })}
            onChangeItem={item => this.setState({
              Employee: item.value
            })}
          />
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.subtitle}>Kleur</Text>
          <DropDownPicker
            items={[
              { label: 'Groen', value: 'Groen', icon: () => <Icon name="award" size={18} color="#000" />, hidden: true },
              { label: 'Rood', value: 'Rood', icon: () => <Icon name="award" size={18} color="#000" /> },
              { label: 'Geel', value: 'Geel', icon: () => <Icon name="award" size={18} color="#000" /> },
              { label: 'Oranje', value: 'Oranje', icon: () => <Icon name="award" size={18} color="#000" /> },
            ]}
            defaultValue={this.state.Color}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            labelStyle={{
              fontSize: 16,
              textAlign: 'left',
              color: '#000'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', minHeight: 160 }}

            isVisible={this.state.isVisibleColor}
            onOpen={() => this.changeVisibility({
              isVisibleColor: true
            })}
            onClose={() => this.setState({
              isVisibleColor: false
            })}
            onChangeItem={item => this.setState({
              Color: item.value
            })}
          />
        </View>

        <View style={{ paddingTop: 50 }}>
          <TouchableOpacity onPress={this.eventHandlers.navigateToHarvestMistakes}>
            <Text style={styles.title}>START CONTROLE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  navigateToHarvestMistakes() {
    this.props.navigation.navigate('HarvestMistakes', {Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
        Employee: this.state.Employee, Color: this.state.Color });
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderBottomWidth: 1,
  },
  dropdown: {
    marginHorizontal: 16,
    paddingBottom: 20,
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
  subtitle: {
    fontSize: 24,
  },
});