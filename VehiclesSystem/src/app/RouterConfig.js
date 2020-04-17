import PublicRouter from '../public/routes/PublicRouter';
import UserRouter from '../users/routes/UserRouter';
import { createSwitchNavigator } from 'react-navigation';




// create switch navigation with authentication flow and main app
const RouterConfig  = createSwitchNavigator(
    {
      Login: PublicRouter,
      App: UserRouter
    },
    {
      initialRouteName: 'Login'
    }
  );

//routes.public.render() ou routes.user.render()
export default RouterConfig;