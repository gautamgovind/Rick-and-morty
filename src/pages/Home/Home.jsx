import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Home.scss';
import Card from '../../component/Card/Card';
import Filter from '../../component/Filter/Filter';
import {FiltersData, dropdownData} from '../../constants/constants';
import Input from '../../component/atom/Input/Input';
import {Dropdown} from '../../component/atom/Dropdown/Dropdown';
import {connect} from 'react-redux';
import {filterCardData} from '../../component/Card/cardAction';

export const Home = ()=> {
    
    const [filterInput, setFilterInput] = useState([]);

    const dispatch = useDispatch();

    const changeView = (filterOption)=> {
        setFilterInput([...filterInput, filterOption]);

        filterInput.map(item=>{
            if(item.label === filterOption.label) {
                const newFilter = filterInput.filter(item=>(
                    item.label!== filterOption.label
                ));
                setFilterInput(newFilter);
            }
        })
    }

    useEffect(
        () => {
            filterInput.length &&  dispatch(filterCardData(filterInput));
        },
        [filterInput],
    );

    return (
        <div className="mar-container">
            <h1>Rick and Morty</h1>
            <main className="main-container">
                <div className="filter-section">
                <h2>Filters</h2>
                    {FiltersData.map(filters=>(
                        <Filter key={filters.filterTitle} title={filters.filterTitle} options={filters.filtersOptions} 
                        handleChange={(filterOption)=>changeView(filterOption)} />
                    ))}
                </div>
                <div className="result-container">
                    <div className="selected-Filters">
                        <h2>Selected Filters</h2>
                        <div className="selected-filters-options"></div>
                    </div>
                    <div className="search-sort-section">
                        <div className="search-section">
                            <Input id="search" placeholder="search here!" />
                            <button className="search-btn">Search</button>
                        </div>
                        <div className="sort-section">
                            <Dropdown id="sort" options={dropdownData} />
                        </div>
                    </div>
                    <Card />
                </div>
            </main>
        </div>
    )
}