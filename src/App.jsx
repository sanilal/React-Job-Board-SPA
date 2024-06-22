import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import NotFound from './pages/NotFound'
import AddJobPage from './pages/AddJobPage'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/add-job' element={<AddJobPage />} />
    <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
    <Route path='*' element={<NotFound />} />
  </Route>

))

export default function App() {
  
  
  return (
   <RouterProvider router={router} />
  )
}
