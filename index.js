'use strict';

module.exports = {
	'extends': 'adpyke-react',
	'rules': {
		'react-native/no-unused-styles': 2,
		'react-native/split-platform-components': 2,
		'react-native/no-inline-styles': 2
	},
	'env': {
		'browser': false,
		'node': true,
		'react-native/react-native': true
	},
	'plugins': [
		'react',
		'react-native'
	]
};
