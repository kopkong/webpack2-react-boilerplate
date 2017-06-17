/**
 * Created by colin on 2017/6/17.
 */

const initialState = {
    name : 'A',
    id   : 1
};

export function page(state = initialState, { type = '', data = {} }) {

    switch (type) {
        case 'Set':
            return {
                ...state,
                ...data
            };
        default:
            return state;
    }
}
