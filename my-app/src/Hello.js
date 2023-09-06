import React from 'react'

export const Hello = ({ username }) => {
    // let username = ""
    if(username === undefined){
      username = "-"
    }
    return (<>
      <h2> Hello, {username}</h2>
    </>)
  }