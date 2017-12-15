import React, { Component } from 'react';
import NewsListItem from '../components/NewsListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import news from '../data/news.json';

class NewsListScreen extends Component {

	static navigationOptions = {
    title: 'BBC News',
  };

	constructor(props) {
		super(props);
		this.state = {
			news,
		}
		this.renderNewsItem = this.renderNewsItem.bind(this);
		this.showNewsDetailScreen = this.showNewsDetailScreen.bind(this);
	}

	showNewsDetailScreen(item) {
		const { navigate } = this.props.navigation;

		navigate('Detail', item);
	}

	renderNewsItem({item}) {
		return (
			<NewsListItem 
				item={item} 
				onPress={this.showNewsDetailScreen}
			/>
		);
	}

	extractNewsItemKey(item) {
		return item.url;
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList 
					data={news}
					renderItem={this.renderNewsItem}
					keyExtractor={this.extractNewsItemKey}
				/>
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