
import React, {useEffect, useState } from 'react';
import axios from "axios"
import NumberFormat from "react-number-format";
import "../../App.css";

const Dummy1 = () => {
  const [confirmed, setConfirmed] = useState("");
  const [deaths, setDeaths] = useState("");
  const [recovered, setRecovered] = useState("");
useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) => { 
     setConfirmed(response.data.confirmed.value);
     setDeaths(response.data.deaths.value);
     setRecovered(response.data.recovered.value);
    })  
 }, []);

 return(
    <>
        <tr>
            <th>
                <h1 className="card1">
                    <p>Incident</p>
                    <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                </h1>
            </th>
<th>
                <h1 className="card2">
                    <p>Deceased</p>
                    <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
                </h1>
            </th>
            <th>
                <h1 className="card3">
                    <p>Recovered</p>
                    <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                </h1>
            </th>
            </tr>
            </>
      ); 
    };
    
    export default Dummy1;