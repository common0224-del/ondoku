
---

# App.tsx

~~~tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  PassagePractice: undefined;
  SentencePractice: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const SAMPLE_TEXT = `In 2012, the Earth Summit was held in Rio de Janeiro. The theme of the Summit was environmental problems. Jose Mujica made a speech there. Today, many people seek economic development, but he thought that this tendency damaged the earth.`;

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Ondoku App</Text>
        <Text style={styles.subtitle}>高校英語授業向け 音読練習アプリ</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>現在の教材</Text>
          <Text style={styles.passageText}>{SAMPLE_TEXT}</Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('PassagePractice')}
        >
          <Text style={styles.primaryButtonText}>通し読みモード</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('SentencePractice')}
        >
          <Text style={styles.secondaryButtonText}>1文ずつ練習モード</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function PassagePracticeScreen() {
  const wordCount = SAMPLE_TEXT.trim().split(/\s+/).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>通し読みモード</Text>
});
