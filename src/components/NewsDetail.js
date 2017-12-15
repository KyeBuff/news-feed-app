import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Timestamp from './Timestamp';

const NewsDetail = (props) => {
	const {urlToImage, title, description, publishedAt} = props.detail;

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
		</View>
	);
}

export default NewsDetail;

const styles = StyleSheet.create({
	contentContainer: {
		marginTop: 20,
		paddingHorizontal: 10,
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
	}
});