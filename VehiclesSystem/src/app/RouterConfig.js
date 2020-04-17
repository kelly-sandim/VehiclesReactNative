import PublicRouter from '../public/routes/PublicRouter';
import UserRouter from '../users/routes/UserRouter';

export default class RouterConfig {
    render()
    {
        const routes = {
            public: new PublicRouter(),
            user: new UserRouter()            
        };    
    }
    
    //routes.public.render() ou routes.user.render()
}