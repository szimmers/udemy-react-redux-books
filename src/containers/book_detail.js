import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
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
					{this.props.book.title}
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

/**
 * return will be props for BookList
 * @param dispatch
 * @returns {{selectBook: selectBook}|ActionCreator<any>|ActionCreatorsMapObject}
 */
/*
function matchDispatchToProps(dispatch) {
	// whenever selectBook is called, pass result to all our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}
*/

export default connect(mapStateToProps)(BookDetail);
