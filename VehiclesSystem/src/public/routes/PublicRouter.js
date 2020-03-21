import { createStackNavigator } from 'react-navigation-stack';

import Login from '../views/Login';
import Register from '../views/Register';

export default createStackNavigator({
    Home: {
        screen: Login
    },
    Register: {
        screen: Register
    }        
});