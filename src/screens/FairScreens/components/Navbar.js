import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FairHomeScreen from '../FairHomeScreen/FairHomeScreen';
import FairTimetableScreen from '../FairTimetableScreen/FairTimetableScreen';
import FairChatScreen from '../FairChatScreen/FairChatScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../styles/theme';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName={FairHomeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === 'Attendees') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (routeName === 'Timetable') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (routeName === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={25}
              color={color}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                height: '170%',
              }}
            />
          );
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          backgroundColor: 'white',
          right: 10,
          borderRadius: 5,
          height: 45,
          elevation: 0,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Attendees'
        component={FairHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Timetable'
        component={FairTimetableScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Chat'
        component={FairChatScreen}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
