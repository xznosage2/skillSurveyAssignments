import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.theHeader}>
      <Text>Hedder</Text>
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.personalInfo}>
        <Text>personal informetion </Text>
        <StatusBar style="auto" />
      </View>
      
      <View style={styles.theSkills}>
        <Text>Your skills</Text>
        <StatusBar style="auto" />
      </View>
      
      <View style={styles.theSubmission}>
        <Text>Submit</Text>
        <StatusBar style="auto" />
      </View>
      
      </>

  );
}

const styles = StyleSheet.create({
  theHeader: {
    flex: 1,
    backgroundColor: 'Black',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'red',
    borderWidth:5,
  },
  personalInfo: {
    flex: 1,
    backgroundColor: 'Red',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black',
    borderWidth:5,
  },

  theSkills: {
    flex: 1,
    backgroundColor: 'Orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black',
    borderWidth:5,
  },

  theSubmission: {
    flex: 1,
    backgroundColor: 'Yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black',
    borderWidth:5,
  },



});
