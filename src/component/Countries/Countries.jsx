import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = ()=>{
    const [countrys, setcountry]=useState([]);
    const [visitedcountries,setvisited]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountry(data));
    },[])
    const handlevisitedcountry=country=>{
        const newvisaitcountry=[...visitedcountries, country];
        setvisited(newvisaitcountry);
    }
    
    return (
        <div>
            <h3>Countries: {countrys.length}</h3>
            <div>
            <h5>visited country: {visitedcountries.length}</h5>
            <ul>

            </ul>
            </div>
            <div className="country-container">
            {
            countrys.map(country=><Country 
                key={country.cca3} 
                handlevisitedcountry={handlevisitedcountry}
                country={country}></Country>)}
            </div>

        </div>
    );
};
export default Countries;