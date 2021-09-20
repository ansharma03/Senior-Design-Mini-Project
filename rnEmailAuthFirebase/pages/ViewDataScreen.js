import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemComponent from './ItemComponent';

import database from '@react-native-firebase/database';
import auth from "@react-native-firebase/auth";

const ViewDataScreen = ({route}) => {
  const [itemsArray, setItemsArray] = useState([]);
  const [user, setUser] = useState();
  const [id, setId] = useState();
  
  React.useEffect(() => {
    database().ref('items/' + route.params.paramKey).on('value', (snapshot) => {
      let data = snapshot.val();
      console.log(data);
      const items = Object.values(data);
      setItemsArray(items);
    });
  }, []);

  
  return (
    <View style={styles.container}>
      {itemsArray.length > 0 ? (
        <ItemComponent items={itemsArray} />
      ) : (
        <Text>No items</Text>
      )}
    </View>
  );
};

export default ViewDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
});
