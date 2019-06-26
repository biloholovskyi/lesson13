import React from 'react';
import styled from 'styled-components';

const TaskItem = styled.li`
  list-style: none;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 10px;
  text-decoration: ${props => props.complete ? "line-through" : "none"};
  opacity: ${props => props.complete ? ".6" : "1"};
  :after {
    content: '';
    width: 60px;
    height: 1px;
    background-color: #000;
    opacity: .5;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  :hover {
    cursor: pointer;
  }
`;

const Task = ({complete, text, id, toggleComplete}) => {
  return (
    <TaskItem id={id} complete={complete} onClick={() => toggleComplete(id)}>{text}</TaskItem>
  )
}

export default Task;