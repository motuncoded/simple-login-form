import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
//task 1
import Login from "./components/TaskA/Login"
import LoginB from "./components/TaskB/Login"
// task 2
import Home from "./components/TaskB/Home";
import SignUp from './components/TaskA/SignUp';
import SignUpB from './components/TaskB/SignUp';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import SignIn from './components/TaskC/SignIn';
import LogUp from "./components/TaskC/LogUp"





const Stack = createNativeStackNavigator();
const Tab =  createBottomTabNavigator()


function TaskA() {
  return (
    <Stack.Navigator screenOptions={{
    headerShown: false
   }}>
      <Stack.Screen name="Login" component={Login} />
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
                },
              }}></Stack.Screen>
    </Stack.Navigator>
  );
}  
function TaskB() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Login" component={LoginB} options={{
        
        headerShown: true,
        headerStyle: {
              backgroundColor: '#212529',
           
            },
                         headerTintColor: '#fafafa',

      }} />
        <Stack.Screen
          name="SignUp"
          component={SignUpB}
          options={{
        
           headerShown: true,
        headerStyle: {
              backgroundColor: '#212529',
           
            },
                         headerTintColor: '#fafafa',

      }}
        ></Stack.Screen>
    </Stack.Navigator>
  );
}  

function TaskC() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name="SignIn" component={SignIn} options={{
        
        headerStyle: {
              backgroundColor: 'black',
           
            },
                         headerTintColor: '#fafafa',

      }} />
        <Stack.Screen
          name="LogUp"
          component={LogUp}
          options={{
        
           headerShown: true,
        headerStyle: {
           backgroundColor: 'black'
            },
                 headerTintColor: '#fafafa',

      }}
        ></Stack.Screen>
    </Stack.Navigator>
  );
}  


export default function App() {


  return (
         <NavigationContainer>
  
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
             tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
   }}>
        <Tab.Screen name="TaskA"
          component={TaskA}
           options={{
             tabBarLabel: 'TaskA',
        
      tabBarIcon: () => (
        <MaterialIcons name="task" color="black" size={34} />
      ),
    }}
        />
         <Tab.Screen name="TaskB"
          component={TaskB}
           options={{
      tabBarLabel: 'TaskB',
      tabBarIcon: () => (
        <MaterialIcons name="task" color="black" size={34} />
             ),
      
    }}
        />
         <Tab.Screen name="TaskC"
          component={TaskC}
           options={{
      tabBarLabel: 'TaskC',
      tabBarIcon: () => (
        <MaterialIcons name="task" color="black" size={34} />
             ),
      
    }}
        />
    </Tab.Navigator>
    </NavigationContainer>
  


);
}


