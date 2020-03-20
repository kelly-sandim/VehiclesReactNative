import { createStackNavigator } from 'react-navigation-stack';

import PublicRouter from '../public/routes/PublicRouter';

export default createStackNavigator({
    ...PublicRouter,
});