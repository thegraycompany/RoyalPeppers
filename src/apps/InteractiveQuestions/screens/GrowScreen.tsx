import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

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
}

export class GrowScreen extends React.Component<IProps, IState> {
  public eventHandlers = {
    navigateToGrowMistakes: () => this.navigateToGrowMistakes(),
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
    };
  }

  changeVisibility(state: any) {
    this.setState({
        isVisibleLocation: false,
        isVisibleGreenhouse: false,
        isVisiblePath: false,
        isVisibleEmployee: false,
        ...state
    });
}

  public render() {
    return (
      <View>
        <Text style={styles.title}>
          Toppen/Draaien
        </Text>
        
        <View style={styles.dropdown}>
        <Text style={styles.subtitle}>Locatie</Text>
        <DropDownPicker
          items={[
            {label: 'Rilland', value: 'Rilland', icon: () => <Icon name="flag" size={18} color="#000" />},
            {label: 'Warmoeziersweg', value: 'Warmoeziersweg', icon: () => <Icon name="flag" size={18} color="#000" />, hidden: true},
            {label: 'Anthony Lionweg', value: 'Anthony Lionweg', icon: () => <Icon name="flag" size={18} color="#000" />},
            {label: 'Narcissenweg', value: 'Narcissenweg', icon: () => <Icon name="flag" size={18} color="#000" />},
            {label: 'Waddinxveen', value: 'Waddinxveen', icon: () => <Icon name="flag" size={18} color="#000" />},
          ]}
          defaultValue={this.state.Location}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa', minHeight: 200}}

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
              {label: 'Kas 1', value: 'Kas 1', icon: () => <Icon name="flag" size={18} color="#000" />, hidden: true},
              {label: 'Kas 2', value: 'Kas 2', icon: () => <Icon name="flag" size={18} color="#000" />},
              {label: 'Kas 3', value: 'Kas 3', icon: () => <Icon name="flag" size={18} color="#000" />},
          ]}
          defaultValue={this.state.Greenhouse}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa'}}

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
              {label: 'Pad 1', value: 'Pad 1', icon: () => <Icon name="flag" size={18} color="#000" />, hidden: true},
              {label: 'Pad 2', value: 'Pad 2', icon: () => <Icon name="flag" size={18} color="#000" />},
              {label: 'Pas 3', value: 'Pad 3', icon: () => <Icon name="flag" size={18} color="#000" />},
            
          ]}
          defaultValue={this.state.Path}
          searchable={true}
          searchablePlaceholder="Zoek een pad"
          searchablePlaceholderTextColor="gray"
          searchableError={() => <Text>Not Found</Text>}
          searchableStyle={{backgroundColor: '#dfdfdf'}}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa'}}

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
              {label: 'Pietje Puk', value: 'Pietje Puk', icon: () => <Icon name="user" size={18} color="#000" />, hidden: true},
              {label: 'Tom Thieman', value: 'Tom Thieman', icon: () => <Icon name="user" size={18} color="#000" />},
          ]}
          defaultValue={this.state.Employee}
          searchable={true}
          searchablePlaceholder="Zoek een Medewerker"
          searchablePlaceholderTextColor="gray"
          searchableError={() => <Text>Not Found</Text>}
          searchableStyle={{backgroundColor: '#dfdfdf'}}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}        
          dropDownStyle={{backgroundColor: '#fafafa'}}
          
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

        
      <View style={{paddingTop: 50}}>
        <TouchableOpacity onPress={this.eventHandlers.navigateToGrowMistakes}>
          <Text style={styles.title}>START CONTROLE</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  navigateToGrowMistakes() {
    this.props.navigation.navigate('GrowMistakes', {Location: this.state.Location, Greenhouse: this.state.Greenhouse, Path: this.state.Path,
      Employee: this.state.Employee});
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