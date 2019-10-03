import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Notification extends PureComponent {
  static navigationOptions = ({navigation}) => {
    let title = 'Notification';
    let tabBarIcon = ({tintColor}) => <Icon name="md-notifications" size={20} color={tintColor} />;;
    return {title, tabBarIcon};
  };
  render() {
    return (
      <View>
        <Text> Notification Page </Text>
      </View>
    );
  }
}
