import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Share } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const data = {
  Love: ['तेरी मुस्कान मेरी पहचान है ❤️', 'तुम हो तो हर पल खास है 💕'],
  Sad: ['कुछ यादें कभी भुलाई नहीं जाती 💔', 'खामोशी भी बहुत कुछ कह जाती है 😔'],
  Romantic: ['तेरे ख्यालों में खोया रहता हूँ ❤️', 'तुमसे ही मेरी दुनिया है 💖'],
  Attitude: ['अपनी पहचान खुद बनाते हैं 😎', 'हम जैसे हैं वैसे ही खास हैं 🔥'],
  Friendship: ['दोस्ती दिल से होती है ❤️', 'सच्चा दोस्त अनमोल होता है 🤝']
};

export default function App() {
  const [category, setCategory] = React.useState('Love');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Laddu Shayari ❤️</Text>
      <Text style={styles.subtitle}>दिल की बात शायरी के साथ</Text>

      <ScrollView
