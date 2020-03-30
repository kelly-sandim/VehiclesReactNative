import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../views/Home';

const UserRouter = createDrawerNavigator({
    Home: {
        screen: Home
    },
},
{
    headerMode: 'none',
});

export default UserRouter;