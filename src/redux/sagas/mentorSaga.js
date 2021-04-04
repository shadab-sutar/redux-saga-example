import { call, put, takeEvery } from 'redux-saga/effects';

const mentorURL = 'http://localhost:8000/api/expertrons/get-all-mentors';

function getMentors() {
    return fetch(mentorURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'sessionid': 'excFRtuy22ghskdaytrok=',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json())
        .catch((error) => { throw error });
}

function* fetchMentors(action) {
    try {
        const mentors = yield call(getMentors);
        yield put({ type: 'GET_MENTORS_SUCCESS', mentors: mentors });
    } catch (e) {
        yield put({ type: 'GET_MENTORS_FAILED', message: e.message });
    }
}

function* mentorSaga() {
    yield takeEvery('GET_MENTORS_REQUEST', fetchMentors);
}

export default mentorSaga;