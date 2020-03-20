import React from 'react';
import { createAppContainer } from 'react-navigation';
import PublicRouter from '../public/routes/PublicRouter';


const AppStackNavigator = PublicRouter;

const Apps = createAppContainer(AppStackNavigator)

export default class App extends React.Component {
    render() {
        return <Apps />;
    }
}

// const App = () => <PublicRouter />;

// export default App;