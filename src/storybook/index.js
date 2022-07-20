import { getStorybookUI, configure } from '@storybook/react-native';
import { name as appName } from '../../app.json';
import { AppRegistry } from 'react-native';
import './rn-addons.js';

configure(() => {
    require('../components/Task.stories.js'); // we will create this file in the next steps
}, module);

const StorybookUIRoot = getStorybookUI({
    asyncStorage:null
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);