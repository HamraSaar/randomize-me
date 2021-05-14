import React, { FC } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./Navigators/RootNavigator"

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default Navigation
