import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import { EmojiProvider } from '../context/EmojiContext';


// --- IMPORT SCREENS ---
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ToolsScreen from './screens/ToolsScreen';
import SettingsScreen from './screens/SettingsScreen';

// --- NON VISIBLE SCREEN ---
import CalendarScreen from './screens/nonVisible/CalendarScreen';
import ChatBotScreen from './screens/nonVisible/ChatBotScreen';
import QrCodeScanner from './screens/nonVisible/QrCodeScanner';
import KanbanScreen from './screens/nonVisible/KanbanScreen';
import SignScreen from './screens/nonVisible/SignScreen';
import PersonalInfoScreen from './screens/nonVisible/PersonalInfoScreen';


import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#4686ff',
                tabBarInactiveTintColor: '#919191',
                tabBarLabelStyle: {
                    fontFamily: 'nunito-light',
                    fontSize: 12
                },
                tabBarStyle : {
                    backgroundColor: "#ebebeb",
                }
            }}
        >
            <Tab.Screen
                 name="home" 
                 component={HomeScreen}
                 options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="home" size={30} color={color} style={{}}/>
                    ),
                }} 
            />
           <Tab.Screen
                 name="dettagli" 
                 component={DetailsScreen}
                 options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="file-text-o" size={23} color={color} style={{}}/>
                    ),
                }}
            />
            <Tab.Screen
                 name="strumenti" 
                 component={ToolsScreen}
                 options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="flask" size={24} color={color} style={{}}/>
                    ),
                }}
            />
            <Tab.Screen
                 name="impostazioni" 
                 component={SettingsScreen}
                 options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="cog" size={25} color={color} style={{}}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const MainContainer = () => {
  return (
    <EmojiProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'login'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={LoginScreen} options={{gestureEnabled: false}}/>
                <Stack.Screen name="mainTabs" component={MainTabNavigator} options={{gestureEnabled: false}}/>
                {/* --- NON VISIBLE SCREEN --- */}
                <Stack.Screen name="calendar" component={CalendarScreen}/>
                <Stack.Screen name="chatbot" component={ChatBotScreen}/>
                <Stack.Screen name="pdfReader" component={QrCodeScanner}/>
                <Stack.Screen name="kanban" component={KanbanScreen}/>
                <Stack.Screen name="sign" component={SignScreen}/>
                <Stack.Screen name='personal-info' component={PersonalInfoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </EmojiProvider>
  )
}

export default MainContainer;