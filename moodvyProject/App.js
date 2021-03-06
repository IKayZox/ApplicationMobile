import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {conn} from './navigation/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import HomeScreen from './navigation/screens/HomeScreen';
import LoginScreen from './navigation/screens/LoginScreen';
import RegisterScreen from './navigation/screens/RegisterScreen';

//Screen names
const homeName = "Home";
const login = 'Login';
const register = 'Register';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  
  return (
    <NavigationContainer>
    {
      false ? (
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
      ) : (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={login} component={LoginScreen} />
          <Stack.Screen name={homeName} component={HomeScreen} />
          <Stack.Screen name={register} component={RegisterScreen} />
        </Stack.Navigator>
        )}
    </NavigationContainer>
  );
}

export default App;