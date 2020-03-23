import { createStackNavigator } from 'react-navigation-stack';

import Login from '../views/Login';
import Register from '../views/Register';

const PublicRouter = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    }        
},
{
    headerMode: 'none',
});

export default PublicRouter;