import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {List, ListItem} from 'react-native-elements';

const benefitsInfo = "Donating blood doesn't just benefit recipients. There are health benefits for donors too aside from helping others."

const sideEffectsInfo = "Donating blood is a safe process, but there are some things you should know before you donate. Here are some side effects you should consider before donating blood:"

const benefits = [
  {
    title: "Lower risk of heart disease and cancer"
  },
  {
    title: "Benefit your physical health"
  },
  {
    title: "Burns calories" 
  },
  {
    title: "Reduce iron levels"
  },
  {
    title: "Free health check-up"
  },
  {
    title: "Save one or even more lives"
  },
  
]

const sideEffects = [
  {
    title: "Feel lightheaded, or dizzy"
  },
  {
    title: "Bruising" 
  },
  {
    title: "Continued Bleeding" 
  },
  {
    title: "Pain" 
  },
  {
    title: "Physical Weakness" 
  },
  
]

const benefitsImage = require('../assets/images/BenefitsImage.png')

const sideEffectsImage = require('../assets/images/SideEffectsImage.png')

export default class WhyScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(){
    super()
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    if(this.state.selectedIndex == 0){ //benefits
      info=benefitsInfo
      data=benefits
      image=benefitsImage
    }else{ //side effects
      info=sideEffectsInfo
      data=sideEffects
      image=sideEffectsImage
    }
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
          <SegmentedControlTab
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            values={['Benefits', 'Side Effects']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
          <Text style={styles.Info}>
              { info }
          </Text>
          <View style={styles.WhyInfo}> 
            <List containerStyle={styles.List}>
              {data.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  hideChevron={true}
                  leftIcon={{name: 'drop', type: 'entypo', color: 'red'}}
                  containerStyle={styles.ListItem}
                  titleStyle={styles.ListItemTitle}
                />
              ))
              }
            </List>
        <Image 
            source={
              image
            }
            style={styles.Image}
        />
          </View>

        </ScrollView>
      </View>
      
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
  List:{
    borderColor:'white'
  },
  ListItem:{
    borderBottomColor: '#fff',
  },
  ListItemTitle:{
    fontSize: 18
  },
  welcomeImage: {
    marginTop: 30,
    width: 1000,
    height: 60,
    resizeMode: 'contain',
  },
    Info:{
    marginTop: 20,
    marginLeft: 20,
    marginRight: 18,
    fontSize: 16
  },
  activeTabStyle:{
    backgroundColor:'red'
  },
  tabTextStyle:{
    color:'red'
  },
  tabStyle:{
    borderColor:'red'
  },
  Image:{
    flex:0.7,
    resizeMode: 'contain',
    height:150,
    width:175,
    marginLeft:175
  },
  
});
