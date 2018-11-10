import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  WebView
} from 'react-native';
import SliderEntry from '../components/SliderEntry';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import {Text, Card, ListItem, List} from 'react-native-elements';


export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcoming Events'
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: 'https://calendar.google.com/calendar/embed?mode=AGENDA&src=en.singapore%23holiday%40group.v.calendar.google.com&ctz=Asia%2FSingapore'}}
          style={{}}
        />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
