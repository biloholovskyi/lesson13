import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import * as actions from '../../reducer/actions';

import Task from "../task/task";
import AddForm from "../addForm/addForm";

const FormWrapper = styled.div`
  width: 650px;
  min-height: 300px;
  background: rgba(255, 255, 255, 0.67);
  border-radius: 8px;
  padding: 25px 50px 13px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Form = ({taskList, complete}) => {
  const list = taskList.map(item => {
    if(item.visible) {
      return (
        <Task
          key={item.id}
          id={item.id}
          text={item.text}
          toggleComplete={complete}
          complete={item.complete}/>
      )
    }
  });
  return (
    <FormWrapper>
      <ul className="taskList">
        {list}
      </ul>
      <AddForm/>
    </FormWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);