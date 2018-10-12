import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import SliderEntry from '../components/SliderEntry';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import {Text, Card} from 'react-native-elements';

import { MonoText } from '../components/StyledText';


export default class NextEventScreen extends React.Component {
  static navigationOptions = {
    title: 'Next Event'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/heart.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <Card>
            <View style={styles.When}>
                <Text h4 style={styles.WhenTitle}>
                When?
                </Text>
                <Text h5 style ={styles.WhenInfo}>
                November .....
                </Text>
            </View>

            <View style={styles.Where}>
                <Text h4 style={styles.WhereTitle}>
                Where?
                </Text>
                <Text h5 style={styles.WhereInfo}>
                jakarta...
                </Text>
            </View>

            <View style={styles.What}>
                <Text h4 style={styles.WhatTitle}>
                    What to bring?
                </Text>
                <Text h5 style={styles.WhatInfo}>
                    id
                </Text>
            </View>
          </Card>

          <Card style={styles.Contact}>
              <Text h5 style={styles.ContactTitle}>
                For more information, please contact:
              </Text>
              <Text h6 style={styles.ContactInfo}>
                Email: ..........
              </Text>
          </Card>
        </ScrollView>

        
      </View>
    );
  }

  
  _NextPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  When:{
    marginBottom: 20
  },
  WhenTitle:{
    fontSize:27
  },
  WhenInfo:{
    fontSize:20
  },
  Where:{
    marginBottom: 20
  },
  WhereTitle:{
    fontSize:27
  },
  WhereInfo:{
    fontSize:20
  },
  What:{
    marginBottom: 20
  },
  WhatTitle:{
    fontSize:27
  },
  WhatInfo:{
    fontSize:20
  },
  ContactTitle:{
    fontSize:20
  },
  ContactInfo:{
    fontSize:18
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 1000,
    height: 60,
    resizeMode: 'contain',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
