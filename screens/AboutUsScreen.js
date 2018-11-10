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
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import {Text, Card, ListItem, List} from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export const CAROUSEL = [
  { image: require('../assets/images/img1.png')},
  { image: require('../assets/images/img2.jpg')},
  { image: require('../assets/images/img3.png')},
  { image: require('../assets/images/img4.png')},
]

export default class NextEventScreen extends React.Component {
  static navigationOptions = {
    title: 'About Us'
  };

  _renderItem({item, index}){
    return <SliderEntry data={item}/>;
  }

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
          <View style={styles.carousel}>
            <Carousel
            ref={c => this._slider1Ref = c}
            data={CAROUSEL}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            />
          </View>

          <Card style={styles.AboutUs}>
            <Text style={styles.AboutUsTitle}>
              About Us:
            </Text>
            <Text style ={styles.AboutUsText}>
            Liquid Life is a non profit project which is based on the need of blood donors in Indonesia. 
            Starting off as volunteers in the organization Indahnya Berbagi,
            we help organize a blood donor event once every three months. 
            To improve and promote these events, we eventually work with Indahnya Berbagi. 
            
            </Text>
          </Card>

          <Card style={styles.Mission}>
            <Text style={styles.MissionTitle}>
              Mission:
            </Text>
            <Text style={styles.MissionText}>
            Despite being the world's fourth largest population, the Red Cross in Indonesia is 
            always low on blood supplies due to alack of donors. In these events, 
            we work with the Red Cross to collect blood packs from 
            blood donors to meet demand during crisis.
            </Text>
          </Card>

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
  
  ContactTitle:{
    fontSize:16,
    fontWeight:'bold'
  },
  ContactInfo:{
    fontSize:16,
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
    marginTop: 15
  },
  ListItemContact:{
    borderBottomColor:'white'
  },
  ListContact:{
    borderColor:'white'
  },
  Info:{
    flexDirection:'row',
    alignItems:'center',
    marginTop: 30

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
  AboutUsTitle:{
    fontSize:16,
    fontWeight:'bold'
  },
  AboutUsText:{
    fontSize:15,
  },
  MissionTitle:{
    fontSize:16,
    fontWeight:'bold'
  },
  MissionText:{
    fontSize:15,
  },
  
});
