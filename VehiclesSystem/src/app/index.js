import React from 'react';

import PublicRouter from '../public/routes/PublicRouter';
import { createAppContainer } from 'react-navigation';

import { View, StatusBar, StyleSheet } from 'react-native';


const App = createAppContainer(PublicRouter);

export default App;

// export default class App extends React.Component {
//     render() {
//         return( 
//             <View style={styles.container}>
//                 <StatusBar 
//                     backgroundColor="#2e87c2"
//                     barStyle="light-content"
//                 />
//                 <PublicRouter />    
//             </View>
//         );
//     }
// }

// const styles =  StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#3498db'
//     },
// });