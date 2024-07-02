import React, { useState } from 'react'

const BookedSpaces = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

    const fetchSpaces = () => {
        
    }

  return (
    <div>BookedSpaces</div>
  )
}

export default BookedSpaces;