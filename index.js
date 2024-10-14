/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';

enableScreens(); // 최적화 및 오류 방지
AppRegistry.registerComponent(appName, () => App);
