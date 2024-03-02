import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './components/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './components/SignUp';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
    headerShown: false
  }}  >
        <Stack.Screen
          name="Login"
          component={Login}
      
          
         
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: '  Sign Up',
            headerShown: true,
                  headerTitleAlign: 'center',

            headerStyle: {
              backgroundColor: '#0a0a0a',
           
            },
             headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 30
          },}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>   
  );
}


