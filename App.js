import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Sorocaba from './Sorocaba';
import SantoAndre from './SantoAndre';
import SaoBernardo from './SaoBernardo';


function HomeScreen() {
  return (
    <View >
      .
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sorocaba" component={Sorocaba} 
        options={{
          tabBarIcon: () => (<Icon name="business-sharp" size={30} color="black" />)
      }}/>
        <Tab.Screen name="Santo André" component={SantoAndre} 
        options={{
        tabBarIcon: () => (<Icon name="business-sharp" size={30} color="black" />)
      }}/>
      <Tab.Screen name="São Bernardo" component={SaoBernardo} 
        options={{
        tabBarIcon: () => (<Icon name="business-sharp" size={30} color="black" />)
      }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}