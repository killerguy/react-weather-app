import * as React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

interface WeatherSearchProps {
	onSearch: any
	isDisabled: boolean
}

interface WeatherSearchState {
	location: string
}

export class WeatherSearch extends React.Component<WeatherSearchProps, WeatherSearchState> {
	constructor(props: WeatherSearchProps) {
		super(props);

		this.state = {
			location: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		const value = event.target.value;
		this.setState({ location: value });
	}

	handleSubmit() {
		this.props.onSearch(this.state.location);
	}

	render() {
		return (
			<Search
				type='text'
				value={this.state.location}
				onChange={this.handleChange}
				onSearch={this.handleSubmit}
				onPressEnter={this.handleSubmit}
				placeholder='Search weather by city'
				disabled={this.props.isDisabled}
				style={{ width: 250 }}
				enterButton
			/>
		);
	}
}
