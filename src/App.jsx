import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

export default function App() {
  
  
  return (
    <>
    <Navbar />
    <Hero />
    

    {/* <!-- Developers and Employers --> */}
    <HomeCards />

    {/* <!-- Browse Jobs --> */}
    <JobListings />
    <ViewAllJobs />
    
    </>
  )
}
