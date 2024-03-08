

import { View, Text, ImageBackground,StyleSheet,TextInput,Pressable } from 'react-native'
import React from 'react'


const SignUp = ({navigation}) => {
  return (
    <View style={{flex:1}} >
      <ImageBackground style={styles.image} resizeMode='cover' blurRadius={10}
 source={require("./leaves.jpg")}>
  
        <View style={styles.container}>
          <Text style={styles.header}>Sign Up</Text>
           <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input}/>
        </View>
 <View style={styles.inputContainer}>
              <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input}/>
        </View>
          <View style={styles.inputContainer}>
            <Text  style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: "#fff", textAlign:"center",fontSize:20 }}>Login</Text>
          </Pressable>
           <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable style={styles.signUp}  onPress={() =>
        navigation.navigate('SignIn')
      }>
            <Text style={styles.signUp}> Sign In</Text>
            </Pressable>
        </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
        width: '100%',
        height: '100%',
    flex: 1,
  },
  container: {
    flex:1,
       justifyContent: "center", 
    alignItems: "center"

  },
   header: {
    textAlign: "center",
    fontSize: 25, 
     color: "#fafafa",
         marginBottom:70

    

  },

   inputContainer: {
    width: 350,
    paddingVertical:8,
     marginVertical: 10,
    borderColor:"#fafafa",
     borderWidth: 1,
     marginHorizontal: 5,

  },
   label:{
      position:"absolute",
    top:-12,
     left: 5,
     color: "#fafafa",
     backgroundColor:'rgba(0, 0, 0, 0.6)',
     


   },
  input: {

  },
  
    loginButton:{
    backgroundColor: "green",
    color: "#fafafa",
    width: 350,
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginTop: 50,
  },
     footer: {
   flexDirection: "row",
   justifyContent: "center",
   alignItems:"center",
   marginVertical:60
  }, 
  footerText: {
    color: "#fafafa",

 },
  signUp: {
color:"green",
 }
})

export default SignUp