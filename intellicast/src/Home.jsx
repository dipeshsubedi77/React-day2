import React from 'react'
import Button from './Button'
import Card from './Card'

// hamle ja import vanni xa tesbatw props pathauxau dynamic content ko lagi

const Home = () => {
  return (
    <div>
        <Button name = "Register"/>
        <Button name = "Log In"/>
        <Button name = "Sign up"/>
        <Button name = "1"/>
        <Button />

        <Card car = "Title"/>
        <Card car = "paragrap"/>
        <Card car = "image"/>
        
    </div>
  )
}

export default Home
