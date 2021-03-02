import {LOAD_CARD_DETAIL, LOAD_FILTERED_DATA} from '../../constants/constants';

export const loadCardDetail = (param)=> (
    {  
        type: LOAD_CARD_DETAIL,
        param
    }
)

export const filterCardData = (param)=> (
    {
        type: LOAD_FILTERED_DATA,
        payload: param
    }
)