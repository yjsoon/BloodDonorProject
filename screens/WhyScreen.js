import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {List, ListItem} from 'react-native-elements';

const benefits = [
  {
    title: "Lower risk of heart disease and cancer"
  },
  {
    title: "Burns calories" 
  },
  {
    title: "Reduce iron levels"
  },
  {
    title: "It's for a good cause!"
  },
]

const sideEffects = [
  {
    title: "Feel nauseous, lightheaded, or dizzy"
  },
  {
    title: "May develop a bruise at the site" 
  },
  
]

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
      data=benefits
    }else{ //side effects
      data=sideEffects
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
            values={['Benefits', 'Side Effects']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
          <View style={styles.BenfitsInfo}> 
            <List>
              {data.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  hideChevron={true}
                  leftIcon={{name: 'drop', type: 'entypo'}}
                  containerStyle={styles.ListItem}
                  titleStyle={styles.ListItemTitle}
                />
              ))
              }
            </List>
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
  ListItem:{
    borderBottomColor: '#fff',
  },
  ListItemTitle:{
    fontFamily: 'Courier'
  },
  welcomeImage: {
    marginTop: 30,
    width: 1000,
    height: 60,
    resizeMode: 'contain',
  },
});
