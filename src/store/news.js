const initialState = {
	news: [],
	newsRefreshing: false,
};

const newsReducer = (state=initialState, action) => {
	if(action.type === '[News] setArticles') {
		return {
			articles: action.payload.articles,
			newsRefreshing: false,			
		}
	}
	if(action.type === '[News Refreshing] setRefreshing') {
		return {
			newsRefreshing: true,
		}
	}

	return state;
}

// Selectors

const getNewsSelector = (state) => {
	return state.news.articles;
}

const getNewsRefreshing = (state) => {
	return state.news.newsRefreshing;
}

export default newsReducer;

export {
	getNewsSelector,
	getNewsRefreshing
}
