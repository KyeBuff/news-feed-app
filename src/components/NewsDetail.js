import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const NewsDetail = (props) => {
	const {urlToImage} = props.detail;
	return (
		<View>
			<Image
				source={{url: urlToImage}}
				style={styles.image}
			/>
		</View>
	);
}

export default NewsDetail;

const styles = StyleSheet.create({
	image: {
		aspectRatio: 1.5,
		width: '100%',
	}
});