import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';

const AddDataScreen = ({route}) => {
 const [Food, onChangeText] = useState('');
 const [user, setUser] = useState();
 const [id, setId] = useState();
    
//console.log(route.params.paramKey);
    
let addItem = item => {
    database().ref('items').child(route.params.paramKey).push({
          Food: item
        });
    };
    
const  handleSubmit = () => {
    addItem(Food);
    Alert.alert('Item saved successfully');
  };
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Food</Text>
        <TextInput style={styles.itemInput} onChangeText={text => onChangeText(text)} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
}

export default AddDataScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
