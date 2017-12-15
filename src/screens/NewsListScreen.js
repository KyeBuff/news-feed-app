import React, { Component } from 'react';
import NewsListItem from '../components/NewsListItem';
import { View, FlatList } from 'react-native';
import news from '../data/news.json';

class NewsListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news,
		}
		this.renderNewsItem = this.renderNewsItem.bind(this);
	}

	renderNewsItem(item) {
		return <NewsListItem />
	}

	render() {
		return (
			<View>
				<FlatList 
					data={news}
					renderItem={this.renderNewsItem}
				/>
			</View>
		)
	}
}

export default NewsListScreen;

			// <NewsListItem />
