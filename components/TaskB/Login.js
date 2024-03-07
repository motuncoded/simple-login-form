import { View, Text,StyleSheet, TextInput,Image,Pressable } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Login = () => {
  return (
    <View style={{ backgroundColor: "#212529", flex: 1 }}>
      <View style={styles.container}>
      <Image source={require("./triangle.png")}  style={styles.logo} />
      <Text style={styles.heading}>WELCOME BACK</Text>
      </View>
      <View style={styles.loginView}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="USERNAME" style={styles.input} placeholderTextColor={'white'}/>
        </View>
          <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="PASSWORD" placeholderTextColor={'white'}/>
        </View>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: "#fff", textAlign:"center",fontSize:20 }}>LOGIN IN</Text>
        </Pressable>
         <Text style={styles.paragraph}>
              OR LOGIN WITH SOCIAL MEDIA
            </Text>
            <View style={styles.socialIcons}>
              <Pressable style={styles.social} >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                <Entypo name="facebook-with-circle" size={35} color="white" />
</Text>
            </Pressable>
             <Pressable style={styles.social}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
              <FontAwesome6 name="square-x-twitter" size={35} color="white" />

</Text>
              </Pressable>
                <Pressable style={styles.social}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
<Entypo name="instagram-with-circle" size={34} color="white" />


</Text>
              </Pressable>
            </View>
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
    width: 230,
    height: 230,
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
    paddingVertical:8,
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

export default Login