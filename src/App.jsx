import React from 'react'

export default function App() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  return (
    <>
    <div className='text-5xl'>App</div>
    <ul>
      {months.map((month, index)=>(
        <li key={index}>{month}</li>
      ))}
    </ul>
    </>
  )
}
