import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootContainer from './routes/RootContainer';
import AuthProvider from './Provider/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <RootContainer />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
