import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SliderEntry from '../components/SliderEntry';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import {Text, Card, ListItem, List, Button} from 'react-native-elements';

import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text h4 style ={styles.titleText}>
              Liquid Life
            </Text>
            <Text h5 style ={styles.subtitleText}>
              we share because we care
            </Text>
            <Image
              source={
                require('../assets/images/heart.png')
              }
              style={styles.welcomeImage}
            />
            <Image
            source={
                require('../assets/images/picture.jpg')
              }
              style={styles.picture}
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

          <View style={styles.AboutUs}>
              <Button 
                onPress={this._NextPress} 
                style={styles.NextLink}
                title="Learn More About Us!"
                backgroundColor="#ff0000"
                rightIcon={{name: 'caret-right', type: 'font-awesome'}}
              />
          </View>
        </ScrollView>
    );
  }

  
  _NextPress = () => {
    //WebBrowser.openBrowserAsync(
    //  'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    this.props.navigation.navigate('AboutUs')
    
  };
}

const styles = StyleSheet.create({
  titleText:{
    fontWeight: 'bold',
    color:"#ff0000",
    fontFamily: 'MarkerFelt-Thin',
    fontSize: 40
  },
  subtitleText:{
    fontSize:18,
    fontFamily: 'Menlo-Bold'
  },
  
  AboutUs:{
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 1000,
    height: 60,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 0,
  },
  List:{
    marginLeft:20,
    marginRight:20
  },
  ListItemTitle:{
    fontSize:20,
    color: 'black',
  },
  picture:{
    resizeMode: 'contain',
    width: 600,
    height: 200
  },
  
});
