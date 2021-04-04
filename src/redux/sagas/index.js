import { all } from 'redux-saga/effects';
import mentorSaga from './mentorSaga';

export default function* rootSaga() {
    yield all([
        mentorSaga()
    ]);
}