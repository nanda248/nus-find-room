import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import ListViewExample from './ListViewExample';
import Venues from './venues';

import venuesData from '../data/venuesData.js'
import venueInfoData from '../data/venueInfoData.js'


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  indicator: {
    backgroundColor: '#ff4081',
    opacity:0
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    opacity: 1,
    width: 90,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
});

export default class Tabview extends Component {

  static title = 'Scroll views';
  static backgroundColor = '#fff';
  static tintColor = '#222';
  static appbarElevation = 0;

  static propTypes = {
    style: View.propTypes.style,
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'A' },
      { key: '2', title: 'B' },
      { key: '3', title: 'C' },
      { key: '4', title: 'D' },
      { key: '5', title: 'EL' },
      { key: '6', title: 'HIKL' },
      { key: '7', title: 'MNOP' },
      { key: '8', title: 'R' },
      { key: '9', title: 'S' },
      { key: '10', title: 'T' },
      { key: '11', title: 'UVW' },
      { key: '12', title: 'Y' },
    ],
  };

  _first: Object;
  _second: Object;
  _third: Object;

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _handleTabItemPress = route => {
    if (route !== this.state.routes[this.state.index]) {
      return;
    }
    switch (route.key) {
    case '1':
      this._first.scrollTo({ y: 0 });
      break;
    case '2':
      this._second.scrollTo({ y: 0 });
      break;
    case '3':
      this._third.scrollTo({ y: 0 });
      break;
    }
  };

  _renderLabel = (props: any) => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => inputIndex === index ? '#D6356C' : '#222');
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[ styles.label, { color } ]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderHeader = (props) => {
    return (
      <TabBar
        {...props}
        pressColor='rgba(255, 64, 129, .5)'
        onTabPress={this._handleTabItemPress}
        renderLabel={this._renderLabel(props)}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tab}
        style={styles.tabbar}
      />
    );
  };



  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Venues venues={venuesData.venues.A}/>;
    case '2':
      return <Venues venues={venuesData.venues.B}/>;
    case '3':
      return <Venues venues={venuesData.venues.C}/>;
    case '4':
      return <Venues venues={venuesData.venues.D}/>;
    case '5':
      return <Venues venues={venuesData.venues.EF}/>;
    case '6':
      return <Venues venues={venuesData.venues.HIKL}/>;
    case '7':
      return <Venues venues={venuesData.venues.MNOP}/>;
    case '8':
      return <Venues venues={venuesData.venues.R}/>;
    case '9':
      return <Venues venues={venuesData.venues.S}/>;
    case '10':
      return <Venues venues={venuesData.venues.T}/>;
    case '11':
      return <Venues venues={venuesData.venues.UVW}/>;
    case '12':
      return <Venues venues={venuesData.venues.Y}/>;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}