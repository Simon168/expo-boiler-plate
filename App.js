import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

export default function App() {
  return (
    <AppContainer />
  );
}

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'blue'
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

class Dashboard extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white'
    }
  }

  render(){
    return (
      <ScrollView>
        <View style={{height:1000, borderWidth:15, borderColor:'green'}}>
          <Text>Dashboard</Text>
        </View>
      </ScrollView>

    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
  Home: Home
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange'
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
  Home: Home,
  Dashboard: Dashboard
  },
  {
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange'
      }
    }
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
