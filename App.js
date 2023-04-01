import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text ...</Text>
      </View>
      <Text style={{ margin:16, borderWidth: 2, borderColor: 'red', padding: 16}}>Hello ZAW WIN MYINT !</Text>
      <Text style={styles.dummyText}>Hello ZAW WIN MYINT !</Text>
      <Button title='Click me ...' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin:16, 
    borderWidth: 2, 
    borderColor: 'blue', 
    padding: 16
  }
});


//https://github.com/academind/react-native-practical-guide-code/tree/main

// to run from "Expo Go" with "WSL"
// npm start -- --tunnel