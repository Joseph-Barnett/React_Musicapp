import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ArtistDiscovery, ArtistForm, ArtistInfo, ArtistLikeButton } from './components';
import { Layout } from './Layout'
import * as Pages from './pages'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Pages.Home />} />
      <Route path="artists" element={<Pages.Artists />} />
      </Route>
    </Routes>
  )
}

export default App
