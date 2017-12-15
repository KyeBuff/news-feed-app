import React, { Component } from 'react';
import NewsListItem from '../components/NewsListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import NewsDetail from '../components/NewsDetail';

class NewsListScreen extends Component {

	constructor(props) {
		super(props);
	}

	static navigationOptions = ({navigation}) => ({
    title: 'BBC News'
  });

	render() {
		console.log(this.props.navigation.state.params);
		return (
			<View style={styles.container}>
				<NewsDetail detail={this.props.navigation.state.params} />
			</View>
		)
	}
}

export default NewsListScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1,
	}
});