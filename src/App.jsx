import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./routes"
import { ArtistDiscovery, ArtistForm, ArtistInfo, ArtistLikeButton } from './components';
import { Layout } from './Layout'
import * as Pages from './pages'
import { Home, Login, Artists } from './pages'
import './App.css'
import { AuthProvider } from "./contexts"

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="*" element={<h1>{location.pathname} page does not exist</h1>} />
      <Route path="/" element={<Layout />} >
        <Route index element={<Pages.Home />} />
        <Route path="artists" element={<Pages.Artists />} />
      </Route>
    </Routes>
    </AuthProvider>
  )
}

export default App
