import React from 'react'
import Card from './Card'

export default function App() {
  return (
    <div>
      <h1 className = "heading1">Todo App</h1>
      <Card heading2 = "Bangladesh" heading4 = "Bangladesh is a small country in south asia"/>
      <Card heading2 = "India" heading4 = "India is the second largest country"/>
      <Card heading2 = "Pakistan" heading4 = "Pakistan is a south asian country"/>
      <Card heading2 = "Nepal" heading4 = "Nepal is the south asian country"/>
      <Card heading2 = "Srilanka" heading4 = "Srilanka is a south asian country"/> 
      <Card heading2 = "Maldeep" heading4 = "Maldeep is a south asian country"/> 
    </div>
  )
}
