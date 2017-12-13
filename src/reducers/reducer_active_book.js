/**
 * reducer for active book selection
 * @param state    state this reducer is responsible for, not the app state
 * @param action
 */
export default function(state = null, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}