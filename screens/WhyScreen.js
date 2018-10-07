import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
]

const sideEffects = [
  {
    title: "dizzy"
  },
  {
    title: "Burns calories" 
  },
  {
    title: "Reduce iron levels"
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
      icon='flight-takeoff'
    }else{ //side effects
      data=sideEffects
      icon='av-timer'
    }
    return (
      <ScrollView style={styles.container}>
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
                leftIcon={{name: icon}}
                containerStyle={styles.ListItem}
                titleStyle={styles.ListItemTitle}
              />
            ))
            }
          </List>
        </View>

      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  ListItem:{
    borderBottomColor: '#fff',
  },
  ListItemTitle:{
    fontFamily: 'Courier'
  }

});
