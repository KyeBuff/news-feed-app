import axios from 'axios';

export default getNews = () => {
	const apiKey = 'a7cf14713de34422822c0f3658e7d85b';
	const url = 'https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey='+apiKey;
	
	return axios.get(url);
}

