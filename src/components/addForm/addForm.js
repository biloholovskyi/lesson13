import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import * as actions from '../../reducer/actions';

const AddFormWrapper = styled.form`
  width: 100%;
`;

const AddInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 8px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000;
  background-color: transparent;
  margin-bottom: 15px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const AddFormButton = styled.button`
  min-width: 133px;
  height: 40px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  background-color: ${props => props.color ? props.color : "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;  
  line-height: 19px;
  color: #000000;
  :hover {
    cursor: pointer;
  }
`;

const AddForm = ({addTask, changeInput, taskText, clearInput, hidden}) => {
  return (
    <AddFormWrapper onSubmit={(e) => {
      e.preventDefault();
      addTask(taskText);
      clearInput();
    }}>
      <AddInput onChange={(e) => changeInput(e)} value={taskText} placeholder="Enter a new todo item"/>
      <ButtonWrapper>
        <AddFormButton type="button" color="#FFE482" onClick={hidden}>Hide completed</AddFormButton>
        <AddFormButton type="submit">Add new</AddFormButton>
      </ButtonWrapper>
    </AddFormWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks,
    taskText: state.taskState
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddForm);