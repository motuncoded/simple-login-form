import { View, Text,StyleSheet,TextInput, Pressable, Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={{backgroundColor:"#000",flex:1}} >
      <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
        <View style={styles.loginContainer}>
          <Text style={styles.heading}>Login</Text>
        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput placeholder="motunrayoadeneye@gmail.com" placeholderTextColor={'grey'}/>
        </View>
          <View style={styles.inputContainer}>
          <Text>Password</Text>
          <TextInput placeholder="*******" placeholderTextColor={'grey'}/>
        </View>
        <Pressable style={styles.button}>
          <Text style={{ color: "#fff", textAlign:"center" }}>Login</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable style={styles.signUp}>
            <Text style={styles.signUp}> Sign up</Text>
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
   marginVertical:140
  }, 
  footerText: {

 },
  signUp: {
    backgroundColor:"#F5F5F5"
   
 }
});