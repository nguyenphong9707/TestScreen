import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class FriendRequest extends PureComponent {
  static navigationOptions = ({navigation}) => {
    let title = 'Friend Request';
    let tabBarIcon = ({tintColor}) => <Icon name="user-friends" size={20} color={tintColor} />;;
    return {title, tabBarIcon};
  };
  render() {
    return (
      <View>
        <Text> FriendRequest Page </Text>
      </View>
    );
  }
}
