import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book</div>;
		}

		return (
			<div>
				<h3>Details for</h3>
				<div>
					Title: {this.props.book.title}
					<br/>
					Pages: {this.props.book.pages}
				</div>
			</div>
		)
	}
}

/**
 * return will be props for component
 * @param state
 */
function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
