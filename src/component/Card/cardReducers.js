import {LOAD_CARD_DETAIL_SUCCESS, LOAD_CARD_DETAIL_FAILURE, LOAD_FILTERED_DATA} from '../../constants/constants';

//Filter Function
const getFilteredData = (filters,originData, data) => {
    console.log(originData, data);
    let filterData = [];
    originData.results.filter(item=>{
        filters.filter(filterItem=>{
            if(filterItem.key.toLowerCase() === 'origin' && item[filterItem.key.toLowerCase()].name === filterItem.label) {
                filterData.push(item);
            }
            else if(item[filterItem.key.toLowerCase()] === filterItem.label){
                filterData.push(item);
            }   
        });
    });
    data.results = filterData;
    return data;
}

let originData;
export const cardReducer = (state={msg: "Page is loading..."}, action)=>{
    switch(action.type) {
        case LOAD_CARD_DETAIL_SUCCESS: {
                originData= {...action.payload.data};
                return {...state, data: action.payload.data, };
            }
        case LOAD_CARD_DETAIL_FAILURE:
            return {...state, msg: action.payload.msg};
        case LOAD_FILTERED_DATA:{
            return {...state, data: getFilteredData(action.payload, originData, state.data)};
        }
        default: 
            return state;
    }
}