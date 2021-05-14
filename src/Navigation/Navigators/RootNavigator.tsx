import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../../Stores/hooks/useStores'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList, ROUTE_NAMES } from '../navigationTypes'
import ContactsScreen from '../../Screens/ContactsScreen'
import theme from '../../Themes/Theme'
import ContactDetailsScreen from '../../Screens/ContactDetailsScreen'

const RootStack = createStackNavigator<RootStackParamList>()

const RootNavigator: FC = observer(() => {
  const { rootStore } = useStores()

  return (
    <RootStack.Navigator
      headerMode='screen'
      initialRouteName={ROUTE_NAMES.CONTACTS}
      screenOptions={{
        title: 'Randomize me!',
        headerStyle: {
          backgroundColor: theme.colors.statusBar,
        },
        headerTintColor: theme.colors.black,
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}
    >
      <RootStack.Screen
        name={ROUTE_NAMES.CONTACTS}
        component={ContactsScreen}
      />
      <RootStack.Screen
        name={ROUTE_NAMES.CONTACT_DETAILS}
        component={ContactDetailsScreen}
      />
    </RootStack.Navigator>
  )
})

export default RootNavigator
