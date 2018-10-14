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
import { List,ListItem, Icon } from 'react-native-elements';
import {Table, Row, Rows} from 'react-native-table-component';

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
            tableHead: ['Blood type', 'No. of bags'],

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
     
      _renderHeader = (section, _ , isActive) => {
        return (

          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
            <Icon name={isActive? 'angle-double-up' : 'angle-double-down'} type='font-awesome'/>
          </View>
        );
      };
     
      _renderContent = section => {
        bloodContent = [];
        bloodContent.push(["A", section.A])
        bloodContent.push(["B", section.B])
        bloodContent.push(["AB", section.AB])
        bloodContent.push(["O", section.O])
        return (
          <View>
            <View style={styles.content}> 
            <Text style={styles.contentInfo}>{section.content}</Text>
                <Table borderStyle={{borderWidth: 1, borderColor: 'black'}} style={styles.table}>
                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.textHeader}/>
                    <Rows data={bloodContent} textStyle={styles.text}/>
                </Table>
            </View>
            <View style={styles.sign}>
                <List width={200} containerStyle={styles.List}> 
                    <ListItem
                        title={
                            <Text>Positive {section.positive}</Text>
                        }
                        hideChevron={true}
                        leftIcon={{name:'plus', type: 'entypo', color: 'red'}}
                        containerStyle={styles.ListItem}
                        titleStyle={styles.ListItemTitle}

                    />
                    <ListItem
                        title={
                            <Text>Negative {section.negative}</Text>
                        }
                        hideChevron={true}
                        leftIcon={{name:'minus', type: 'entypo', color: 'red'}}
                        containerStyle={styles.ListItem}
                        titleStyle={styles.ListItemTitle}
                    />
                </List> 
            </View>
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
            <View style={styles.welcomeContainer}>
                <Image
                    source={
                        require('../assets/images/heart.png')
                    }
                style={styles.welcomeImage}
            />
          </View>
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
    table:{
        width: 200
    },
    content:{
        marginTop:20,
        alignItems: 'center'
    },
    contentInfo:{
        alignItems: 'center',
        marginTop:0,
        marginBottom:10,
        fontSize:18
    },
    headerText:{
        marginLeft:30,
        fontSize: 20,
        margin: 20,
        flex:0.9
    },
    sign:{
        alignItems: 'center',
    },
    ListItem:{
        flex:0,
        borderBottomColor:'white',
        paddingBottom:0,
        paddingTop:5
    },
    List:{
        borderColor:'white',
        marginTop:0,
        marginBottom:10
    },
    textHeader:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
    },
    text:{
        textAlign:'center'
    },
    header:{
        marginLeft:20,
        marginRight:20,
        borderColor:'#777',
        borderBottomWidth:2,
        flexDirection:'row'
    }
    
});