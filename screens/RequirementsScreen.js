import React from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import { List, ListItem, Text, colors } from 'react-native-elements';

const ageData = [
  {
    title: "At least 17 years old"
  },
  {
    title: "No upper age limit as long as you're in fit condition to donate"
  },
]

const weightData = [
  {
    title: "At least 110lbs or 50kg"
  },
]

const travelData = [
  {
    title: "At least 3 months since visit from areas with diseases or sickness"
  },
]

const medicationsData = [
  {
    title: "All medicines currently being consumed or consumed before should be notified to the worker"
  },
]

const tatooData = [
  {
    title: "At least 1 year since piercing or tattoo to ensure no infection"
  },
]

const pregnancyData = [
  {
    title: "Can't donate during pregnancy"
  },
  {
    title: "At least 6 weeks after giving birth"
  },
]




export default class RequirementsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/heart.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <Text h5 style={styles.Head}>
              Age:
          </Text>
          <List containerStyle={styles.List}>
           {ageData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={0}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>
          <Text h5 style={styles.Head}>
              Weight:
          </Text>
          <List containerStyle={styles.List}>
           {weightData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
           </List>
           <Text h5 style={styles.Head}>
            Travel:
          </Text>
          <List containerStyle={styles.List}>
           {travelData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>
          <Text h5 style={styles.Head}>
          Medications:
          </Text>
          <List containerStyle={styles.List}>
           {medicationsData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>
          <Text h5 style={styles.Head}>
          Tatoo:
          </Text>
          <List containerStyle={styles.List}>
           {tatooData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>
          <Text h5 style={styles.Head}>
          Pregnancy:
          </Text>
          <List containerStyle={styles.List}>
           {pregnancyData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>
        </ScrollView>
      
      );
  }
}

const styles = StyleSheet.create({
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
    marginTop: 30,
    width: 1000,
    height: 60,
    resizeMode: 'contain',
  },
  Head:{
    fontSize:16,
    marginLeft:20,
    fontWeight:'bold',
  },
  List:{
    marginTop:0,
    marginBottom:20,
    borderColor:'white',
  },
  ListItem:{
    marginTop:0,
    marginLeft:20,
    borderBottomColor:'white',
    paddingBottom:0,
    paddingTop:5
  },
  ListItemTitle:{
    color:'black'
  }
  

})

