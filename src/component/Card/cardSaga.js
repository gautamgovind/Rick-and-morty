import {LOAD_CARD_DETAIL, LOAD_CARD_DETAIL_SUCCESS, LOAD_CARD_DETAIL_FAILURE} from '../../constants/constants';
import {all, takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';



const getCards = (args)=> {
    const {method, url, name, param} = args.param;
    return (
        axios({
            method: method || 'get',
            url: url,
            responseType: param
            })
    )
}

export function* loadCardDetail(args) {
    try{
        const {data, status} = yield call(getCards, args);
        if(data && status=== 200) {
            yield put({
                type: LOAD_CARD_DETAIL_SUCCESS,
                payload: {
                    data
                }
            });
        } else {
            yield put({
                type: LOAD_CARD_DETAIL_FAILURE,
                payload: {
                    msg: "something wrong!!!"
                }
            });
        }
    } catch {
        yield put({
            type: LOAD_CARD_DETAIL_FAILURE,
            payload: {
                msg: "something wrong!!!"
            }
        });
    }
}

export function* getData(...args) {
    yield takeLatest(LOAD_CARD_DETAIL, loadCardDetail, ...args);

}

