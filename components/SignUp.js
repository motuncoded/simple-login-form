import { View, Text, StyleSheet, Image,TextInput, Pressable } from 'react-native'
import React from 'react'

export default function SignUp({navigation}) {
  return (
    <View style={{backgroundColor:"#000",flex:1}} >
     
        <View style={styles.loginContainer}>
         <View style={styles.inputContainer}>
    
          <Text>First name</Text>
          <TextInput placeholder="Motunrayo" placeholderTextColor={'grey'}/>
        </View>
         <View style={styles.inputContainer}>
    
          <Text>Last name</Text>
          <TextInput placeholder="Adeneye" placeholderTextColor={'grey'}/>
        </View>
        <View style={styles.inputContainer}>
    
          <Text>Email</Text>
          <TextInput placeholder="motunrayoadeneye@gmail.com" placeholderTextColor={'grey'}/>
        </View>
          <View style={styles.inputContainer}>
          <Text>Password</Text>
          <TextInput placeholder="*******" placeholderTextColor={'grey'}/>
        </View>
        <View style={styles.inputContainer}>
          <Text>Confirm Password</Text>
          <TextInput placeholder="*******" placeholderTextColor={'grey'}/>
        </View>
        <Pressable style={styles.button}>
          <Text style={{ color: "#fff", textAlign:"center" }}>Login</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable style={styles.signUp} onPress={() =>
        navigation.navigate('Login')}>
            <Text style={styles.signUp}> Sign In</Text>
            </Pressable>
        </View>
        </View>
        
        </View>
          
           

  )
}

const styles = StyleSheet.create({
  container: {
    flex: .4,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"

  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
      borderTopLeftRadius: 67,
    marginTop: 40,
    paddingTop:30


  },
  logo: {
    width: 72,
    height: 58,
  },
  heading: {
    textAlign: "center",
    padding: 40,
    fontSize: 30
  },
  inputContainer: {
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:"#fafafa",
borderTopLeftRadius: 6,
    borderTopRightRadius:1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    marginVertical: 10,
  
  },
  button:{
    backgroundColor: "#0a0a0a",
     marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius:1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius:6,

    marginVertical: 30,
  },
 footer: {
   flexDirection: "row",
   justifyContent: "center",
   alignItems:"center",
   marginVertical:10
  }, 
  footerText: {

 },
  signUp: {
    backgroundColor:"#F5F5F5"
   
 }
});