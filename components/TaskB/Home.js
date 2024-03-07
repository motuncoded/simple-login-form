    import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';



    
    const Home = ({navigation}) => {
      return (
        <View style={{ backgroundColor:"#000", flex: 1 }} >
                <View style={styles.container}>
      <Image source={require("./square.jpg")} style={styles.logo} />
            <Text style={styles.heading}>Welcome</Text>
            </View>
          <View style={styles.inputContainer}>
            <Pressable style={styles.loginButton} onPress={() =>
              navigation.navigate('Login')}>
          <Text style={{ color: "#fff", textAlign:"center", fontSize:20 }}>LOGIN IN</Text>
            </Pressable>
            <Pressable style={styles.signUpButton} onPress={() =>
              navigation.navigate('SignUp')}>
          <Text style={{ color: "#fff", textAlign:"center", fontSize:20 }}>CREATE ACCOUNT</Text>
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
    flex: 1,
    justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#a98467"
        


  },


  logo: {
    width: 110,
    height: 108,
    position: "absolute",
    transform: "skewY(-15deg)"

  },
  heading: {
    textAlign: "center",
    padding: 40,
    fontSize: 40, 
    color:"#fafafa",
    textTransform:"uppercase"

  },
   
      inputContainer: {
        flex: .6,
        alignItems:"center"
  },
  loginButton:{
    backgroundColor: "#6C584C",
    color: "#fafafa",
    width: 300,
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginTop: 40,
      },
      signUpButton: {
        backgroundColor: "#a98467",
        color: "#fafafa",
    width: 300,
    paddingHorizontal: 2,
    paddingVertical: 10,

    marginVertical: 5,
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

});
    export default Home