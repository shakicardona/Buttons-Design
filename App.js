import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import MyButton from './components/mybutton';

export default function App() {

  function pressButtonOne() {
    Alert.alert('First Button Pressed');
  }

  function pressButtonTwo() {
    Alert.alert('Second Button Pressed');
  }

  function pressButtonThree() {
    Alert.alert('Third Button Pressed');
  }

  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Buttons Design Best Practices</Text>

        {/* First Button: 1. Visual Depth
        <View style={styles.buttonContainer}>
          <Text>1. Visual Depth (Elevation & Shadows)</Text>
          <MyButton title="Press Me" onPress={pressButtonOne} type={1}/>
        </View>
        */}

        {/* Second Button: 2. Press Feedback 
        <View style={styles.buttonContainer}>
          <Text>2. Press Feedback (Interaction Response)</Text>
          <MyButton title="Press Me" onPress={pressButtonTwo} type={2}/>
        </View>
        */}

        {/* Second Button: 3. Press Feedback */}
        <View style={styles.buttonContainer}>
          <Text>3. Gradient & Light Reflection (Material Feel)</Text>
          <MyButton title="Press Me" onPress={pressButtonThree} type={3}/>
          {/*<MyButton title="Press Me" onPress={pressButtonOne} type={3}/>
          <LinearGradient
            colors={['#007BFF', '#0052D4']} // Blue gradient
            style={styles.gradient}
          >
            <Text style={styles.text}>Press Me</Text>
          </LinearGradient>
          */}
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingBottom: 6,
  },
  subtitle: {
    fontSize: 18,
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
    paddingTop: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
