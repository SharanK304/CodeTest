import {
    SET_DATA_FROM_SERVICE,
    ADD_TILE,
    REMOVE_TILE
} from '../actions/actionTypes';
const initialState = {};

export default function dataReducer(state = initialState, action) {
    let newState = Object.assign([], state);
    switch (action.type) {
        case SET_DATA_FROM_SERVICE:

            console.log(action.payload);
            return action.payload;
            break;
        case ADD_TILE:
            if (newState.mylist.find((d) => {
                    return d.id === action.tile.id
                })) {
                return newState;
            } else {
                return Object.assign({}, state, {
                    mylist: [...state.mylist, action.tile]
                })
            }
            break;
        case REMOVE_TILE:
            return Object.assign({}, newState, {
                mylist: Object.assign([], newState.mylist.filter(d => {
                    return d.id != action.tile.id
                }))
            })
            break;
        default:
            return state;
            break;
    }
}
