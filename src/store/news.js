const initialState = {
	news: [],
};

const newsReducer = (state=initialState, action) => {
	if(action.type === '[News] setArticles') {
		return {
			articles: action.payload.articles,				
		}
	}

	return state;
}

// Selectors

const getNewsSelector = (state) => {
	return state.news.articles;
}

export default newsReducer;

export {
	getNewsSelector
}
