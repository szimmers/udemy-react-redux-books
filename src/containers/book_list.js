import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';

/**
 * displays the collection of books. knows enough to get the books from redux
 * and to dispatch any selected book.
 */
class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li
					key={book.title}
					className="list-group-item"
					onClick={() => this.props.selectBook(book)}>
					{book.title}
				</li>
			)
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

/**
 * return will be props for BookList
 * @param state
 */
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

/**
 * return will be props for BookList
 * @param dispatch
 * @returns {{selectBook: selectBook}|ActionCreator<any>|ActionCreatorsMapObject}
 */
function matchDispatchToProps(dispatch) {
	// whenever selectBook is called, pass result to all our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);