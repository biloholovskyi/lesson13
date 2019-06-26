export const complete = (id) => ({type: "COMPLETE_TASK", id});
export const addTask = (text) => ({type: "ADD_TASK", text});
export const changeInput = (value) => ({type: "CHANGE_INPUT", value});
export const clearInput = () => ({type: "CLEAR_INPUT"});
export const hidden = () => ({type: "HIDDEN"});