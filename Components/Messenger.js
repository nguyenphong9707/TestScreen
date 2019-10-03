import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Messenger extends PureComponent {
  static navigationOptions = ({navigation}) => {
    let title = 'Messanger';
    let tabBarIcon = ({tintColor}) => <Icon name="message" size={20} color={tintColor} />;;
    return {title, tabBarIcon};
  };
  render() {
    return (
      <View>
        <Text> Messenger Page </Text>
      </View>
    );
  }
}
