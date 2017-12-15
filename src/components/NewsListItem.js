import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Timestamp from './Timestamp';

const NewsListItem = (props) => (
	<TouchableHighlight
		onPress={() => props.onPress(props.item)}
	>
		<View style={styles.itemContainer}>
			<Text 
				style={styles.item}
				numberOfLines={1}
				ellipsizeMode="tail"
			>
				{props.item.title}
			</Text>
			<Timestamp style={styles.published} dateTime={props.item.publishedAt} />
			<View style={styles.div}/>
		</View>
	</TouchableHighlight>
)

export default NewsListItem;

const styles = StyleSheet.create({
	itemContainer: {
		marginVertical: 10,
		paddingHorizontal: 14,
	},
	item: {
		marginBottom: 5,
		fontSize: 16,
		fontWeight: 'bold',
	},
	div: {
		height: 0.5,
		backgroundColor: '#C0C0C0',
		marginHorizontal: 10,
	},
	published: {
		marginBottom: 10,
	}
});