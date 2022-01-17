import React from 'react'

export const ErrorPage = ({status, statusText}) => {
  return (
    <div>
      <h2>Error: {status}</h2>
      <h2>{statusText}</h2>
    </div>
  )
}