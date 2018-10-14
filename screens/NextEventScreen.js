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
import {Text, Card, ListItem, List} from 'react-native-elements';

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

              <List containerStyle={styles.List} > 
                <ListItem
                  title="4 November 2018"
                  hideChevron={true}
                  leftIcon={{name:'event', type: 'MaterialIcons', color: 'red'}}
                  containerStyle={styles.ListItem}
                  titleStyle={styles.ListItemTitle}
                />
                <ListItem
                  title="09.00 - 12.00"
                  hideChevron={true}
                  leftIcon={{name:'access-time', type: 'MaterialIcons', color: 'red'}}
                  containerStyle={styles.ListItem}
                  titleStyle={styles.ListItemTitle}
                />
                <ListItem
                  title={
                    <View>
                      <Text style={styles.ListItemTitle}>Taman Grisenda Blok E2/2</Text>
                      <Text style={styles.ListItemTitle}>Pantai Indah Kapuk</Text> 
                      <Text style={styles.ListItemTitle}>Jakarta Utara</Text>
                    </View>
                  }
                  hideChevron={true}
                  leftIcon={{name:'location-on', type: 'MaterialIcons', color: 'red'}}
                  titleNumberOfLines={3}
                  containerStyle={styles.ListItem}
                />
              </List>


          <View style={styles.What}>
                <Text h4 style={styles.WhatTitle}>
                    What to bring?
                </Text>
                <Text h5 style={styles.WhatInfo}>
                   KTP
                </Text>
            </View>
          <View style={styles.Info}>
            <Image 
            source={
                  require('../assets/images/imageBlood.png')
                }
                style={styles.Image}
            />
            <View style={styles.Contact}>
              <Text h5 style={styles.ContactTitle}>
                For more information, please contact:
              </Text>
              <List containerStyle={styles.ListContact}> 
                <ListItem
                  title="0852-10284908"
                  hideChevron={true}
                  leftIcon={{name:'call', type: 'MaterialIcons', color: 'red'}}
                  containerStyle={styles.ListItemContact}
                  titleStyle={styles.ListItemTitle}
                />
              </List>
            </View>
          </View>
        </ScrollView>

        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  When:{
    marginBottom: 20
  },
  WhenInfo:{
    fontSize:20,
    fontFamily: 'Times New Roman'
  },
  Where:{
    marginBottom: 20
  },
  WhereInfo:{
    fontSize:20,
    fontFamily: 'Times New Roman'
  },
  What:{
    marginLeft: 20,
    marginRight:20,
    marginBottom: 10,
    marginTop:20
  },
  WhatTitle:{
    fontSize:20,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  WhatInfo:{
    fontSize:18,
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
  ListItemContact:{
    borderBottomColor:'white'
  },
  ListContact:{
    borderColor:'white'
  },
  ListItemTitle:{
    fontSize:20,
    fontFamily: 'Times New Roman',
    color: 'black',
  },
  Info:{
    flexDirection:'row',
    alignItems:'center'
  },
  Image:{
    flex:0.3,
    resizeMode:'contain',
    marginLeft:10,
    height:120
  },
  Contact:{
    flex:0.7,
    paddingLeft:20
  },
  List:{
    marginLeft:20,
    marginRight:20
  }

  
});
