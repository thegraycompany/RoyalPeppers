import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INavigationParams {
  naam: string;
}

interface IProps extends NavigationInjectedProps<INavigationParams> {
}

export class DiabetesInfo extends React.Component<IProps> {
  public eventHandlers = {
    navigateToNextScreen: () => this.navigateToNextScreen(),
  };

  public render() {
    return (
      <View>
        <Text>Diabetes, suikerziekte, is een ziekte waarbij het lichaam de bloedsuiker niet meer in evenwicht kan houden.
          Dat komt doordat het lichaam te weinig van het hormoon insuline heeft.
          En ook reageert het lichaam vaak niet meer goed op insuline. Of het maakt helemaal geen insuline meer. Insuline regelt de bloedsuikerspiegel. </Text>
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
