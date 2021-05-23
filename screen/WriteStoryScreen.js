import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header 
                    backgroundColor = {'#252a34'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: '#08d9d6', fontSize: 20, fontFamily : 'Comic Sans MS', fontWeight : 'bold'}
                    }}
                />

                <TextInput 
                    placeholder="STORY TITLE"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="AUTHOR"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="WRITE STORY"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}
                    >
                    <Text style={styles.buttonText}>SUBMIT STORY</Text>
                </TouchableOpacity>

                <Text style = {styles.downText}>
                *made by Avirath
                </Text>

            </KeyboardAvoidingView>
        );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      fontFamily : 'Comic Sans MS',
      borderRadius : 15
  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
      fontFamily : 'Comic Sans MS',
      borderRadius : 15
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      fontFamily : 'Comic Sans MS',
      borderRadius : 15
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#eaeaea',
      width: 80,
      height: 50,
      borderRadius : 15,
      borderWidth : 2
  },
  buttonText: {
      textAlign: 'center',
      color: '#ff2e63',
      fontWeight: 'bold',
      fontFamily : 'Comic Sans MS'
  },
  downText : {
    fontFamily : 'Comic Sans MS',
    fontWeight : 'bold',
    color : 'red'
  }
});