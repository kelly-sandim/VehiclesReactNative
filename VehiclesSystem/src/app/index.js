import PublicRouter from '../public/routes/PublicRouter';
import { createAppContainer } from 'react-navigation';
import RouterConfig from './RouterConfig';

const App = createAppContainer(RouterConfig);

export default App;