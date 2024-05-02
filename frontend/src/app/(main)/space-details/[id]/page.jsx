'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SpaceDetails = () => {

  const { id } = useParams();
  const [spaceData, setSpaceData] = useState(null);

  const fetchSpaceDetails = () => {
    fetch('http://localhost:5000/space/getbyid/'+id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setSpaceData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSpaceDetails();
  }, [])
  

  return (
    <div>SpaceDetails</div>
  )
}

export default SpaceDetails;