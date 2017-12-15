import {
  StackNavigator,
} from 'react-navigation';
import { Platform } from 'react-native';
import { Constants } from 'expo';
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const isAndroid = Platform.OS === 'android';

const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight,
	}
})

export default StackNavigator({
  List: {screen: NewsListScreen},
  Detail: {screen: NewsDetailScreen},
}, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#d35400',
			...extraStyles,
		},
		headerTitleStyle: {
			color: '#fff',
		},
		headerTintColor: '#fff',
	}
});