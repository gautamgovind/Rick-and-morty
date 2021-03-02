import { all } from 'redux-saga/effects';
import { getData } from '../component/Card/cardSaga';

function* rootSaga() {
    yield all([
        getData()
    ])
}

export default rootSaga;