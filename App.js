import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer }>
      <View>
        <TextInput placeholder='Your core goal'></TextInput>
        <Button title='Add '></Button>
      </View>
      <View>
        <Text>List of goals..:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer:{
      padding:50
    }
});
