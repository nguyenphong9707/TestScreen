import React, {Component} from 'react';;
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './Components/Home';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FriendRequest from './Components/FriendRequest';
import Messenger from './Components/Messenger';
import Notification from './Components/Notification';
import Icon from 'react-native-vector-icons/Entypo';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    FriendRequest: {
      screen: FriendRequest,
    },
  },
  {
    drawerPosition: 'right'
    
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    FriendRequest: {
      screen: FriendRequest,
    },
    Messenger: {
      screen: Messenger,
    },
    Notification: {
      screen: Notification,
    },
    Menu: {
      screen: DrawerNavigator,
      navigationOptions: ({navigation}) => ({
        tabBarOnPress: tab => {
          navigation.openDrawer();
        },
        tabBarIcon: ({tintColor}) => (
          <Icon name="menu" size={20} color={tintColor} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#80BD9E',
      },
      activeTintColor: 'white',
    },
  },
);

export default createAppContainer(TabNavigator);
