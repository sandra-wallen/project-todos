import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
`

const TodoBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #8B98F9;
  border: none;
  font-size: 30px;
  color: #fff;
`
const TodoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  width: 80%;
  height: 38px;
  border: none;
  border-bottom: 2px solid #8B98F9;
  margin-left: 10px;
  font-size: 20px;
`

const NewTodo = () => {
  const dispatch = useDispatch()

  const [newTodoInput, setNewTodoInput] = useState('')

  const handleInputChange = (event) => {
    setNewTodoInput(event.target.value)
  }

  const handleButtonPress = () => {
    dispatch(tasks.actions.postNewTodo(newTodoInput))
  }

  return (
    <Container>
      <TodoBtn 
        type="button"
        onClick={handleButtonPress}
        >
          +
      </TodoBtn>
      <TodoInput 
        type="text"
        placeholder="New task"
        onChange={handleInputChange}
      />
    </Container>
  )
}

export default NewTodo