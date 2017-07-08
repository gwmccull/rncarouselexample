import React, { Component } from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Carousel from 'react-native-carousel';

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		backgroundColor: 'yellow',
		justifyContent: 'center',
		width: Dimensions.get('window').width,
	}
});

export default class AllRand extends Component
{

	constructor(props)
	{
		super(props);
		this.state = {
			myArr: ['Page number: ', 'Page number: ']
		};
	}

	_onPressOut()
	{
		this.state.myArr.push('Page number: ')
		this.setState({
				myArr: this.state.myArr
		})
	}

	render()
	{
		let Arr = this.state.myArr.map((text, index) => {
			return <View key={ index } style={ styles.view }><Text>{ text }{ index }</Text></View>
		});

		return (
			<Carousel
				animate={false}
				hideIndicators={false}
				onPageChange={() => this._onPressOut()}
			>
				{ Arr }
			</Carousel>
		);
	}
}
