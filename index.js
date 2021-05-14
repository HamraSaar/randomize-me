import 'react-native-gesture-handler'
import 'mobx-react/batchingForReactNative'
import { AppRegistry, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Globally prevent font scaling
Text.defaultProps = Text.defaultProps || {}
TextInput.defaultProps = TextInput.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TextInput.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => App);
