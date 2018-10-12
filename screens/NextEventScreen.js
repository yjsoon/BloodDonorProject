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
        <ScrollView style={styles.container}>
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
                4 November 2018
                </Text>
                <Text h5 style ={styles.WhenInfo}>
                09.00 - 12.00
                </Text>
            </View>

            <View style={styles.Where}>
                <Text h4 style={styles.WhereTitle}>
                Where?
                </Text>
                <Text h5 style={styles.WhereInfo}>
                Taman Grisenda Blok E2/2 
                </Text>
                <Text h5 style={styles.WhereInfo}>
                Pantai Indah Kapuk
                </Text>
                <Text h5 style={styles.WhereInfo}>
                Jakarta Utara
                </Text>
            </View>

            <View style={styles.What}>
                <Text h4 style={styles.WhatTitle}>
                    What to bring?
                </Text>
                <Text h5 style={styles.WhatInfo}>
                   KTP
                </Text>
            </View>
          </Card>

          <Card style={styles.Contact}>
              <Text h5 style={styles.ContactTitle}>
                For more information, please contact:
              </Text>
              <Text h6 style={styles.ContactInfo}>
                Email: 
              </Text>
          </Card>
        </ScrollView>

        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  When:{
    marginBottom: 20
  },
  WhenTitle:{
    fontSize:27,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  WhenInfo:{
    fontSize:20,
    fontFamily: 'Times New Roman'
  },
  Where:{
    marginBottom: 20
  },
  WhereTitle:{
    fontSize:27,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  WhereInfo:{
    fontSize:20,
    fontFamily: 'Times New Roman'
  },
  What:{
    marginBottom: 10
  },
  WhatTitle:{
    fontSize:27,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  WhatInfo:{
    fontSize:20,
    fontFamily: 'Times New Roman'
  },
  ContactTitle:{
    fontSize:19,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  ContactInfo:{
    fontSize:18,
    fontFamily: 'Times New Roman'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  
});
