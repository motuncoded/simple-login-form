import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import TaskA from "./TasksA/TaskA";
const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
 <Tab.Navigator>
      <Tab.Screen name="TaskA"
        component={TaskA}
       options={{
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <MaterialIcons name="task" color="black" size={24} />
      ),
    }}/>
    </Tab.Navigator> 
  );
}

  <Stack.Navigator 
        screenOptions={{
    headerShown: false
   }} >
        <Stack.Screen
          name="Login"
          component={LoginA}
       />
        <Stack.Screen
          name="SignUp"
          component={SignUpA}
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
                },
              }}>
              
          </Stack.Screen>
      </Stack.Navigator>

