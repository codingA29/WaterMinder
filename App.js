import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// Import Screens (Pastikan path folder sesuai dengan gambar strukturmu)
import Home from './src/screens/Home';
import Statistics from './src/screens/Statistics';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#F8F9FA',
            elevation: 0, // Hilangkan garis bawah header di Android
            shadowOpacity: 0, // Hilangkan garis bawah header di iOS
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#2C3E50',
          },
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            elevation: 20, // Efek bayangan pada navbar bawah
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: '#BDC3C7',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'Beranda',
            // Jika ingin pakai icon, tambahkan di sini (contoh: 💧)
            tabBarIcon: ({ color }) => <Text style={{color}}>💧</Text>
          }}
        />
        <Tab.Screen 
          name="Stats" 
          component={Statistics} 
          options={{
            title: 'Statistik',
            tabBarIcon: ({ color }) => <Text style={{color}}>📊</Text>
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            title: 'Setelan',
            tabBarIcon: ({ color }) => <Text style={{color}}>⚙️</Text>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}