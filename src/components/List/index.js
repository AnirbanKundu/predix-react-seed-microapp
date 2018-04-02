import React from 'react';

class ListItem extends React.Component {

	render() {
		const { title, index, style, onClick, children } = this.props;
		return (
			<div data-index={index} className="list__item" style={style} onClick={onClick}>
				{children}
			</div>
		);
	}
}