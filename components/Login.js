import { View, Text,StyleSheet,TextInput, Pressable } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View >
          <View style={styles.container}>
                
           
                <Text style={{
              fontSize: 20,
              textAlign: "center",
          }}>Please Login Your Details
          </Text>
          <TextInput
              style={styles.input}
              placeholder={"Name"}
                keyboardType="text"/>
                 <TextInput
              style={styles.input}
              placeholder={"Phone-number"}
                keyboardType="numeric"
        />
         <TextInput
              style={styles.input}
                  placeholder={"Email Address"}
                  keyboardType='email-address'
     />
           <Pressable style={styles.button}>
            <Text style={{color:"#fff"}}>Login</Text>
           </Pressable>
        </View>
          
           

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
        justifyContent: 'center',
            marginVertical: 24,

  },
  text:{
      padding:40
    },
   input: {
       height: 40,
       width: 300,
    marginVertical: 12,
    borderRadius: 2,
    borderWidth: 1,
    padding: 5,
    fontSize: 16,
    borderColor: "#0a0a0a",
    },
    button: {
        borderColor: "#0a0a0a",
        backgroundColor:"#0a0a0a",
     borderRadius: 2,
    borderWidth: 2,
        fontSize: 16,

       padding:10,
   }
});