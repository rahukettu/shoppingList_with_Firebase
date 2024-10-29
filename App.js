import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const fetchItems = async () => {
    const itemsCollection = collection(db, 'shoppingList');
    const itemSnapshot = await getDocs(itemsCollection);
    const itemList = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemList);
  };

    const addItem = async () => {
    if (newItem.trim() === '') {
      Alert.alert('Please enter an item name');
      return;
    }

    await addDoc(collection(db, 'shoppingList'), { name: newItem });
    setNewItem('');
    fetchItems(); 
  };


  const removeItem = async (id) => {
    await deleteDoc(doc(db, 'shoppingList', id));
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>

      <TextInput
        placeholder="Add new item"
        value={newItem}
        onChangeText={setNewItem}
        style={styles.input}
      />

      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  itemText: {
    fontSize: 18,
  },
});
