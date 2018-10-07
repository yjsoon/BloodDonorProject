import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class WhyScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
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
    if(this.state.selectedIndex == 0){
      content = (
        <View>
          <Text> Benefits content</Text>
          <Text> ........... </Text>
          <Text> ........... </Text>
        </View>
      )
    }else{
      content = (
        <View>
          <Text> Side Effects content</Text>
          <Text> ........... </Text>
          <Text> ........... </Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <SegmentedControlTab
          values={['Benefits', 'Side Effects']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        {content}
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
