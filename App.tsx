/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { RecoilRoot } from 'recoil';
import Counter from '../rn-super-app/src/Counter';

type Props = StackScreenProps<RootStackParamList, 'App1'>;

const App: React.FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>MicroFrontend - {route.params.file}</Text>
            <View style={styles.card}>
              <View>
              <Text style={styles.title}>Deposit Accounts </Text>
              <Text>{route.params.name}</Text>
              </View>
              <RecoilRoot>
               <Counter />
             </RecoilRoot>
            </View>

            <View style={styles.card}>
              <View>
              <Text style={styles.title}>Loans And Credit Cards</Text>
              <Text>{route.params.name}</Text>
              </View>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACDDDE',
  },
  scrollContainer: {
    height: '100%',
  },
  card: {
    margin:15,
    backgroundColor: '#dff0f7',
    borderRadius: 15,
    padding: 26,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,  // for Android
    flexDirection:'row'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heading:{
    fontWeight:'bold',
    fontSize:25,
    justifyContent:'center',
    marginBottom:20,
    color:'black',
    marginTop:15,
    marginStart:15
  },
});

export default App;
