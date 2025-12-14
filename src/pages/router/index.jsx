import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contact from '../Contact'
import Home from '../Home'
import Skills from '../skills'

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/*' element={<Navigate to="/" />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/skills' element={<Skills />} />
    </Routes>
  )
}

export default AppRouter