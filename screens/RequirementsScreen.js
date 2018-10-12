import React from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

export default class RequirementsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/heart.png')
              }
              style={styles.welcomeImage}
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
  welcomeImage: {
    marginTop: 30,
    width: 1000,
    height: 60,
    resizeMode: 'contain',
  },
})

