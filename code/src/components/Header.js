import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { tasks } from '../reducers/tasks'

const TopHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #F4F4F4;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #A9A4A6;
` 

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ListHeading = styled.h2`
  margin: 0;
`

const Date = styled.p`

`

const ClearBtn = styled.button`
  border-radius: 8px;
  background-color: #8B98F9;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
`

const Span = styled.span`
  text-align: right;
`

const Header = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedItems = items.filter(items => items.complete).length

  const dispatch = useDispatch()

  const today = moment().format('MMMM Do')
  
  return (
    <TopHeader>
      <ListInfo>
        <ListHeading>To do</ListHeading>
        <Date>{today}</Date>
      </ListInfo>
      <ListInfo>
        <Span>{completedItems}/{items.length} tasks</Span>
        <ClearBtn className="clear-btn" type="button" onClick={() => dispatch(tasks.actions.clearAll())}>CLEAR ALL</ClearBtn>
      </ListInfo>
    </TopHeader>
  )
}

export default Header