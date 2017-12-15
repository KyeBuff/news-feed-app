import React, { Component } from 'react';
import NewsListItem from '../components/NewsListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import NewsDetail from '../components/NewsDetail';
import HeaderButton from '../components/HeaderButton';
import { WebBrowser } from 'expo';

class NewsDetailScreen extends Component {

	constructor(props) {
		super(props);
	}

	static navigationOptions = ({navigation}) => {

		const url = navigation.state.params.url;

		function loadBrowser() {
      WebBrowser.openBrowserAsync(url);
    }

    return { 
    	headerRight: <HeaderButton onPress={loadBrowser}/>,
    }
  };

	render() {
		return (
			<View style={styles.container}>
				<NewsDetail detail={this.props.navigation.state.params} />
			</View>
		)
	}
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1,
	}
});