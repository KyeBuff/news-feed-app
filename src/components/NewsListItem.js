import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Timestamp from './Timestamp';

const isIOS = Platform.OS === 'ios';

const NewsListItem = (props) => (
	<TouchableHighlight
		onPress={() => props.onPress(props.item)}
	>
		<View>
			<View style={styles.buttonContainer}>
				<View style={styles.itemView}>
					<Text 
						style={styles.item}
						numberOfLines={1}
						ellipsizeMode="tail"
					>
						{props.item.title}
					</Text>
					<Timestamp style={styles.published} dateTime={props.item.publishedAt} />
				</View>
				{ isIOS ? 
	    	<Icon style={styles.chevron} name="ios-arrow-forward" /> 
	    	: null
	    	}
	    </View>
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
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	itemView: {
		width: '92%',
	},
	chevron: {
		color: '#C0C0C0',
		fontSize: 24,
		alignSelf: 'center',
		marginLeft: 5,
	}
});