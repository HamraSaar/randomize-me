import AsyncStorage from '@react-native-community/async-storage'
import Reactotron from 'reactotron-react-native'

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect()
