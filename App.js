// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello how are you</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import { Text, View } from 'react-native';

// const HomeScreen = () => {
//     return (
//         <View>
//             <Text>Home gf Screen</Text>
//         </View>
//     );
// };

// export default HomeScreen;

// import Main from "./screens/MainComponent";
// import { NavigationContainer } from "@react-navigation/native";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Main />
//     </NavigationContainer>
//   );
// }

import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Main />
            </NavigationContainer>
        </Provider>
    );
}
