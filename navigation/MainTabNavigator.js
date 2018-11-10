import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen'
import WhyScreen from '../screens/WhyScreen';
import RequirementsScreen from '../screens/RequirementsScreen';
import UpdateScreen from '../screens/UpdateScreen';



const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AboutUs: AboutUsScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const WhyStack = createStackNavigator({
  Why: WhyScreen,
});

WhyStack.navigationOptions = {
  tabBarLabel: 'Why',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-help-circle${focused ? '' : '-outline'}` : 'md-help-circle'}
    />
  ),
};

const RequirementsStack = createStackNavigator({
  Requirements: RequirementsScreen,
});

RequirementsStack.navigationOptions = {
  tabBarLabel: 'Requirements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-checkbox${focused ? '' : '-outline'}` : 'md-checkbox'}
    />
  ),
};

const UpdateStack = createStackNavigator({
  Update: UpdateScreen,
});

UpdateStack.navigationOptions = {
  tabBarLabel: 'Update',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-list'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  WhyStack,
  RequirementsStack,
  UpdateStack,
});

