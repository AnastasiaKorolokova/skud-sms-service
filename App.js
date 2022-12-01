import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.text}>Sms service</Text>
      <TextInput style={styles.input} placeholder='Enter phone number' />
      <TextInput style={styles.input} placeholder='Enter a message' />

      <Button title="Send message"/>

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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    padding: 8,
    margin: 10,
    width: 200,
  },
  text: {
    fontSize: 20,
  }
});
