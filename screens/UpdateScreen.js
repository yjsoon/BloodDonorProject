import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
      title: 'First',
      content: 'hiiiiii'
    },
    {
      title: 'Second',
      content: 'helllooo'
    }
  ];

export default class UpdateScreen extends React.Component {
  
    state = {
        activeSections: []
      };
     
      _renderSectionTitle = section => {
        return (
          <View style={styles.content}>
            
          </View>
        );
      };
     
      _renderHeader = section => {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      };
     
      _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      };
     
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };

  render() {
    return (
        <View style={styles.container}>
            <Text> Updates </Text>
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
              />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
});