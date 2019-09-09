# eslint-config-adpyke-react-native

A highly opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) config that I use for my React Native projects. It uses tab indentation, has strict white space rules, and enforces ES6 standards.

## Installation

`$ npm install --save-dev eslint babel-eslint eslint-config-adpyke-react-native eslint-plugin-react eslint-plugin-react-native`

## Usage

Once the `eslint-config-adpyke-react-native` package is installed, you can use it by specifying `adpyke-react-native` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```javascript
{
	"extends": "adpyke-react-native",
	"rules": {
		// Additional, per-project rules...
	}
}
```
