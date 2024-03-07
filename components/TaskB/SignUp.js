import { View, Text, StyleSheet, TextInput, Pressable,Image } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View style={{ backgroundColor: "#212529", flex: 1 }}>
      <View style={styles.container}>
      <Image source={require("./circle.jpg")}  style={styles.logo} />
      <Text style={styles.heading}>Register</Text>
      </View>
      <View style={styles.loginView}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="USERNAME" style={styles.input} placeholderTextColor={'white'}/>
        </View>
          <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="EMAIL" placeholderTextColor={'white'}/>
        </View>
         <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="PASSWORD" placeholderTextColor={'white'}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="CONFIRM PASSWORD" placeholderTextColor={'white'}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="MOBILE" placeholderTextColor={'white'}/>
        </View>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: "#fff", textAlign:"center", fontSize:20 }}>REGISTER</Text>
        </Pressable>
      
            
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
   container: {
    flex: .3,
    justifyContent: "center", 
    alignItems: "center"

  },
   logo: {
    width: 130,
    height: 130,
    position: "absolute",
  },
    heading: {
    textAlign: "center",
    padding: 40,
    fontSize: 25, 
    color:"#fafafa",
    textTransform:"uppercase"

  },
  loginView: {
      justifyContent:"center",
    alignItems: "center",
    flex: .8
  },
  title: {
    color: "#a98467",
        textTransform:"uppercase",
marginVertical:10,
    fontSize: 25, 

  },
  inputContainer: {
    backgroundColor:"#343a40",
    width: 350,
    paddingVertical:16,
    marginVertical:5
  },
  input: {
        paddingLeft:28,

  },
    loginButton:{
    backgroundColor: "#a98467",
    color: "#fafafa",
    width: 350,
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginTop: 50,
      },
    paragraph: {
        color: "#fafafa",
        fontSize: 20,
        textAlign: "center",
        paddingVertical:20

      },
      socialIcons: {
        flexDirection: "row",
      },
      social: {
        marginHorizontal:10
      }

})

export default SignUp;