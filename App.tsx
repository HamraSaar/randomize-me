import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context"
import Navigation from "./src/Navigation/Navigation"
import { useStores } from './src/Stores/hooks/useStores'
import Reactotron from 'reactotron-react-native'
import { StatusBar } from 'react-native'
import theme from './src/Themes/Theme'

if (__DEV__) {
  // @ts-ignore: Unreachable code error
  import('./ReactotronConfig').then(() => Reactotron.log('Reactotron Configured'))
}


const App = () => {
  const { rootStore } = useStores()

  useEffect(() => {
    const initApp = async () => {
      await rootStore.init()
    }
    initApp()
  }, [])

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.colors.statusBar} translucent={false} barStyle='dark-content' />
      <Navigation />
    </SafeAreaProvider>
  )
}

export default observer(App)
