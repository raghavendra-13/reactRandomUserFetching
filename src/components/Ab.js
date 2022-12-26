import React from 'react'
import { useEffect,useState } from 'react';

function Ab() {
      const [mn, setUser] = useState([]);
const fetchData = () => {
    fetch("https://randomuser.me/api/?nat=us&results=9&page=1")
    .then((response) => {
        return response.json();
    }).then((data) => {
        let RK = data.results
        console.log(RK);
        setUser(RK)
    })
}
useEffect(() => {
    fetchData();
},[])
  return (
    
    <div className="clearfix">
    <div className="row">
    <p className='title'>Random-User Fetching</p>
    
      {mn.map(data => (
        <div className="card" key={data.id.value}>
            <div className="avatar">
                <img
                  src={data.picture.large}
                  className="card-img-top"
                  alt=""
                />
              </div>
              <h5 className="card-title">
                {data.name.title}.{data.name.first +
                  " " +
                  data.name.last}
              </h5>
              
              <p className="card-text">
                Address:-{data.location.city +
                  ", " +
                  data.location.state}
                <br />
              
                <span className='streetname'>Streetname:-{data.location.street.name}</span>
                <br />
                <span className="phone">Contact:-{data.phone}</span>
                <br />
                <span className='age'>AGE:-{data.dob.age}</span>
               
              </p>
            </div>

      ))}
    </div>

  </div>
)
}

export default Ab