import * as type from '../types';

export function getMentors(mentors) {
    return {
        type: type.GET_MENTORS_REQUEST,
        payload: mentors
    }
}