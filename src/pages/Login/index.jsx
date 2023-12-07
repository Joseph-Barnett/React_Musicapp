import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import './style.css'

const Login = () => {
  const [inputValue, setinputValue] = useState('')
  const inputRef = useRef()
  const navigate = useNavigate()
  const { setUser } = useAuth()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInput = (e) => {
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(inputValue)
    navigate('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="username" className="mr10">Username</label>
      <input
        type="text"
        id="email"
        className="mr10 p10"
        placeholder="type your email" />
      <input
        type="text"
        id="username"
        className="mr10 p10"
        placeholder="type your name"
        autoComplete="off"
        value={inputValue}
        onChange={handleInput}
        ref={inputRef}
      />
      <input
        type="text"
        id="password"
        className="mr10 p10"
        placeholder="type your password" />
      <input type="submit" className="p10" />
    </form>
  );
}

export default Login
