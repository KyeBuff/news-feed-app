import getNews from './api';

// Action types
const actionTypes = {
	SET_ARTICLES: '[News] setArticles',
}

const actionCreators = {
	setNews: (payload) => {
		return {
			type: actionTypes.SET_ARTICLES,
			payload,
		}
	}
}

const fetchNews = () => {
	return dispatch => {
		getNews().then(response => {
			dispatch(actionCreators.setNews(response.data));
		});
	}
}

export default actionCreators;

export { fetchNews };

