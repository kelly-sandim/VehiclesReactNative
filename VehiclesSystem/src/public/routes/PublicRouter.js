import { createStackNavigator } from 'react-navigation-stack';

import Login from '../views/Login';
import Register from '../views/Register';

const PublicRouter = createStackNavigator({
    Home: {
        screen: Login
    },
    Register: {
        screen: Register
    }        
});

export default PublicRouter;