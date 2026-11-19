import React, { useState } from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
ScrollView,
StyleSheet,
Alert
} from 'react-native';

export default function App() {
const [page, setPage] = useState('home');
const [password, setPassword] = useState('');
const [admin, setAdmin] = useState(false);
const [category, setCategory] = useState('Love');

const [shayari, setShayari] = useState([
{ id: 1, category: 'Love', text: 'तेरी मुस्कान मेरी पहचान है ❤️' },
{ id: 2, category: 'Sad', text: 'कुछ यादें कभी भुलाई नहीं जातीं 💔' },
{ id: 3, category: 'Attitude', text: 'अपनी पहचान खुद बनाते हैं 😎' }
]);

const [newShayari, setNewShayari] = useState('');

const login = () => {
if (password === 'Laddu123') {
setAdmin(true);
setPage('admin');
} else {
Alert.alert('गलत पासवर्ड');
}
};

const addShayari = () => {
if (!newShayari.trim()) return;
setShayari([
...shayari,
{ id: Date.now(), category, text: newShayari }
]);
setNewShayari('');
Alert.alert('शायरी जोड़ दी गई ❤️');
};

const deleteShayari = (id) => {
setShayari(shayari.filter(item => item.id !== id));
};

return (
<View style={styles.container}>
<Text style={styles.title}>❤️ Laddu Shayari ❤️</Text>

  {page === 'home' && (
    <>
      <Text style={styles.heading}>अपनी पसंद की शायरी चुनें</Text>
      {['Love', 'Sad', 'Attitude'].map(item => (
        <TouchableOpacity
          key={item}
          style={styles.button}
          onPress={() => {
            setCategory(item);
            setPage('list');
          }}>
          <Text style={styles.buttonText}>{item} Shayari</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.adminButton}
        onPress={() => setPage('login')}>
        <Text style={styles.buttonText}>Admin Login 🔐</Text>
      </TouchableOpacity>
    </>
  )}

  {page === 'list' && (
    <>
      <Text style={styles.heading}>{category} Shayari</Text>
      <ScrollView>
        {shayari.filter(item => item.category === category).map(item => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.shayari}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </>
  )}

  {page === 'login' && (
    <>
      <Text style={styles.heading}>Admin Login 🔐</Text>
      <TextInput
        style={styles.input}
        placeholder="Admin Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPage('home')}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </>
  )}

  {page === 'admin' && admin && (
    <>
      <Text style={styles.heading}>Laddu Admin Panel</Text>
      <TextInput
        style={styles.input}
        placeholder="नई शायरी लिखें"
        value={newShayari}
        onChangeText={setNewShayari}
      />
      {['Love', 'Sad', 'Attitude'].map(item => (
        <TouchableOpacity
          key={item}
          style={category === item ? styles.selected : styles.button}
          onPress={() => setCategory(item)}>
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={addShayari}>
        <Text style={styles.buttonText}>Add Shayari +</Text>
      </TouchableOpacity>

      <ScrollView>
        {shayari.map(item => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.shayari}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteShayari(item.id)}>
              <Text style={styles.delete}>Delete 🗑️</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setAdmin(false);
          setPage('home');
        }}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </>
  )}
</View>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff0f5',
padding: 20,
paddingTop: 55
},
title: {
fontSize: 27,
fontWeight: 'bold',
color: '#d81b60',
textAlign: 'center',
marginBottom: 25
},
heading: {
fontSize: 21,
fontWeight: 'bold',
textAlign: 'center',
marginBottom: 20
},
button: {
backgroundColor: '#d81b60',
padding: 15,
borderRadius: 12,
marginVertical: 7
},
adminButton: {
backgroundColor: '#333',
padding: 15,
borderRadius: 12,
marginTop: 25
},
selected: {
backgroundColor: '#880e4f',
padding: 15,
borderRadius: 12,
marginVertical: 7
},
buttonText: {
color: 'white',
textAlign: 'center',
fontWeight: 'bold',
fontSize: 16
},
input: {
backgroundColor: 'white',
padding: 15,
borderRadius: 10,
marginVertical: 10,
borderWidth: 1,
borderColor: '#ddd'
},
card: {
backgroundColor: 'white',
padding: 18,
borderRadius: 12,
marginVertical: 8
},
shayari: {
fontSize: 18,
textAlign: 'center',
color: '#333'
},
delete: {
color: 'red',
textAlign: 'right',
marginTop: 10
},
back: {
textAlign: 'center',
marginTop: 20
}
});