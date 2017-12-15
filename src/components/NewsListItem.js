import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Timestamp from './Timestamp';

const NewsListItem = (props) => (
	<TouchableHighlight
		onPress={() => props.onPress(props.item)}
	>
		<View>
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
	item: {
		marginVertical: 12,
		marginBottom: 5,
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 14,
	},
	div: {
		height: 0.5,
		backgroundColor: '#C0C0C0',
		marginHorizontal: 10,
	},
	published: {
		color: '#6C6C6C',
		paddingHorizontal: 14,
		marginBottom: 12,
	}
});