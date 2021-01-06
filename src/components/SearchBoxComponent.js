import React,{useState} from 'react';
import {debounce} from 'lodash';

const SearchBox = ()=>{

    const [search, setSearch]= new useState("");
    const [autoCompleteList, setAutoCompleteList] = new useState([]);

    const handleSearchChange = (updatedValue)=>{
        console.log(updatedValue);
        setSearch(updatedValue);
        debounceARequest();   
    }

    const updateAutoCompleteList= (updatedValues)=>{
        setAutoCompleteList(updatedValues);
    }

    const debounceARequest= ()=>{
       
        (debounce(()=>{mapBoxSearch();},1000))();
    }

    const mapBoxSearch= async () =>{
        const response = await fetch(`${process.env.REACT_APP_MAPBOX_SEARCH_URL}${search}.json?limit=10&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);
        const {features}= await response.json();
        updateAutoCompleteList(features);
    }

    return(
        <div className="searchbox-wrapper">
            <input type='text' name='search-box' onChange={(value)=>handleSearchChange(value.target.value)} />
        </div>
    )
}

export default SearchBox;