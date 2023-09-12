import { useState } from 'react';
import './Country.css'
const Country = ({country, handlevisitedcountry}) => {
    const {name,flags,population,area,cca3}=country;
    const [visited,setvisited] =useState(false);
    const handlevisited=()=>{
        setvisited(!visited);
    }
    const passpara=()=>{
        handlevisitedcountry(country);
    }
    return (
        <div className={`country ${visited &&'visited'}`}>
            <h2>Name: {name?.common}</h2>
            <h4>Population:{population}</h4>
            <p>area:{area}</p>
            <p><small>code: {cca3}</small></p>
            <img src={flags.png} alt="" />
            <button onClick={passpara}>Mark visited</button><br />
            <button onClick={handlevisited}>{visited? 'visited': 'Going'}</button>
            {visited ?'done visit': 'wait for visiting'}
        </div>
    );
};

export default Country;