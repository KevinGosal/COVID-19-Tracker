import React, {useEffect, useState } from 'react';
import axios from "axios"
const Dummy3 = () => {
  const [Province, setDataProvinsi] = useState([]);
  useEffect(() => {
    axios 
    .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((res) => { 
    setDataProvinsi(res.data.data);
    })  },  []);
  return(
    <table border = "1"> 
        <tr><th>No</th><th>Provinsi</th><th>Kasus</th><th>Sembuh</th><th>Mati</th></tr>
{Province.map((item, index) => {
                return(<tr><th scope="row" key={item.fid}>{index + 1}</th><th>{item.provinsi}</th><th>{item.kasusPosi}</th><th>{item.kasusSemb}</th><th>{item.kasusMeni}</th></tr>)
                })}
 </table> );
}
export default Dummy3 ;