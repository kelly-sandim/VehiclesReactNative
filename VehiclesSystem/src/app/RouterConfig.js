import { createStackNavigator } from 'react-navigation';

import PublicRouter from '../public/routes/PublicRouter';

export default createStackNavigator({
    ...PublicRouter,
});