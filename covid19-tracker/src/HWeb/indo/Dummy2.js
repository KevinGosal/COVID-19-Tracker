
import React, {useEffect, useState } from 'react';
import axios from "axios"
import NumberFormat from "react-number-format";
import "../../App.css";

const Dummy2 = () => {
  const [Confirmed, setConfirmed] = useState("");
  const [Deaths, setDeaths] = useState("");
  const [Recovered, setRecovered] = useState("");
useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) => { 
     setConfirmed(response.data.jumlahKasus);
     setDeaths(response.data.meninggal);
     setRecovered(response.data.sembuh);
    })  
 }, []);

 return(
    <>
        <tr>
            <th>
                <h1 className="card1">
                    <p>Incident</p>
                    <NumberFormat value={Confirmed} thousandSeparator={true} displayType={'text'}/>
                </h1>
            </th>
<th>
                <h1 className="card2">
                    <p>Deceased</p>
                    <NumberFormat value={Deaths} thousandSeparator={true} displayType={'text'}/>
                </h1>
            </th>
            <th>
                <h1 className="card3">
                    <p>Recovered</p>
                    <NumberFormat value={Recovered} thousandSeparator={true} displayType={'text'}/>
                </h1>
            </th>
            </tr>
            </>
      ); 
    };
    
    export default Dummy2;