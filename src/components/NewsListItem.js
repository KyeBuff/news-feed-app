import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

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
			<View style={styles.div}/>
		</View>
	</TouchableHighlight>
)

export default NewsListItem;

const styles = StyleSheet.create({
	item: {
		padding: 14,
		fontSize: 16,
		fontWeight: 'bold',
	},
	div: {
		height: 0.5,
		backgroundColor: '#C0C0C0',
		marginHorizontal: 10,
	}
});