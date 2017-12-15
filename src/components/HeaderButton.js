import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default HeaderButton = (props) => (
	<TouchableOpacity style={styles.headerButton} onPress={props.onPress} >
		<Icon style={styles.icon} name="md-open" />
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	headerButton: {
		marginRight: 10,
		marginTop: 4,
	},
	icon: {
		color: '#FFF',
		fontSize: 24,
	}
});