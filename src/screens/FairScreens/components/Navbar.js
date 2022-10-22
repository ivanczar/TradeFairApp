import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Flex, Text } from 'native-base';
import FairHomeScreen from '../FairHomeScreen/FairHomeScreen';
import FairTimetableScreen from '../FairTimetableScreen/FairTimetableScreen';
import FairChatScreen from '../FairChatScreen/FairChatScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../styles/theme';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={{
        // tabBarStyle: { backgroundColor: theme.colors.primary },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Flex style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons size={30} name='people-outline' />
              <Text>Attendees</Text>
            </Flex>
          ),
        }}
        name='FairHome'
        component={FairHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Flex style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons size={30} name='time-outline' />
              <Text>Timetable</Text>
            </Flex>
          ),
        }}
        name='FairTimetable'
        component={FairTimetableScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Flex style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons size={30} name='chatbubble-outline' />
              <Text>Chat</Text>
            </Flex>
          ),
        }}
        name='FairChat'
        component={FairChatScreen}
      />
      {/* <Tab.Screen name='FairHome' component={FairHomeScreen}/> */}
      {/* <Tab.Screen name='FairHome' component={FairHomeScreen}/> */}
    </Tab.Navigator>
  );
};

export default Navbar;
