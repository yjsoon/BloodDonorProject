import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    RefreshControl,
  } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

export default class UpdateScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            activeSections: [],
            refreshing: false,
            
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true})
        return fetch('https://shannonsuhendra.github.io/BloodDonorUpdates.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                    refreshing: false,
                },  function(){
                });
            })
    }

    componentDidMount(){
        return this._onRefresh();
    }
     
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

    if(this.state.isLoading){
        return(
            <View style={{flex:1, padding:20}}>
                <ActivityIndicator/>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
            }
        >
            <Accordion
                sections={this.state.dataSource}
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
              />
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
});