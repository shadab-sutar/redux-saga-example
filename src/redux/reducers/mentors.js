import * as type from '../types';

const initialState = {
    mentors: [],
    loading: false,
    error: null
}

export default function mentors(state = initialState, action) {
    switch (action.type) {
        case type.GET_MENTORS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GET_MENTORS_SUCCESS:
            return {
                ...state,
                loading: false,
                mentors: action.mentors
            }
        case type.GET_MENTORS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}