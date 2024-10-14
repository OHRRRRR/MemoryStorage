/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SaveMemoryAge from './pages/SaveMemoryAge';
import MemoryCalender from './pages/MemoryCalender';
import HomeScreen from './pages/HomeScreen';

AppRegistry.registerComponent(appName, () => MemoryCalender);
