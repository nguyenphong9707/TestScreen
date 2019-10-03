import React, {PureComponent} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends PureComponent {
  static navigationOptions = ({navigation}) => {
    let title = 'News Feed';
    let tabBarIcon = ({tintColor}) => <Icon name="wpforms" size={20} color={tintColor} />;;
    return {title, tabBarIcon};
  };
  render() {
    return (
      <View>
        <Text> Home Page </Text>
      </View>
    );
  }
}
