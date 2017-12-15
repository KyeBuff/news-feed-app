import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableHighlight } from 'react-native';
import Timestamp from './Timestamp';
import { WebBrowser } from 'expo';

const NewsDetail = (props) => {
	const {url, urlToImage, title, description, publishedAt} = props.detail;

	function loadBrowser() {
    WebBrowser.openBrowserAsync(url);
  }

	return (
		<View>
			<Image
				source={{uri: urlToImage}}
				style={styles.image}
			/>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{title}</Text>
				<Timestamp style={styles.published} dateTime={publishedAt} />
				<Text style={styles.description}>{description}</Text>
			</View>
			<TouchableHighlight style={styles.button} onPress={loadBrowser}>
				<Text style={styles.buttonText}>Read more</Text>
			</TouchableHighlight>
		</View>
	);
}

export default NewsDetail;

const styles = StyleSheet.create({
	contentContainer: {
		marginTop: 20,
		paddingHorizontal: 20,
	},
	image: {
		aspectRatio: 1.5,
		width: '100%',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	description: {
		fontSize: 16,
	},
	published: {
		fontSize: 16,
		color: '#6C6C6C',
		marginBottom: 15,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 12,
	},
	buttonText: {
		color: '#d35400',
		fontSize: 16,
	}
});