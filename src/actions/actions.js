import getNews from './api';

// Action types
const actionTypes = {
	SET_ARTICLES: '[News] setArticles',
	SET_REFRESHING_TRUE: '[News Refreshing] setRefreshing',
}

const actionCreators = {
	setNews: (payload) => {
		return {
			type: actionTypes.SET_ARTICLES,
			payload,
		}
	},
	setRefreshing: () => {
		return {
			type: actionTypes.SET_REFRESHING_TRUE,
		}
	}
}

const fetchNews = () => {
	return dispatch => {
		dispatch(actionCreators.setRefreshing());
		getNews().then(response => {
			dispatch(actionCreators.setNews(response.data));
		});
	}
}

export default actionCreators;

export { fetchNews };

