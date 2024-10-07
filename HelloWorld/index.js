/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppPro from './AppPro';
import HelloWorld from './HelloWorld';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWorld);
