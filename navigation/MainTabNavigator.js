import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WhyScreen from '../screens/WhyScreen';
import RequirementsScreen from '../screens/RequirementsScreen';
import UpdateScreen from '../screens/UpdateScreen';



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
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
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
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
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
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
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  WhyStack,
  RequirementsStack,
  UpdateStack,
});

