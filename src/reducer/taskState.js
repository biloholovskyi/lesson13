export default function taskState(state = "", action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return action.value.target.value;
    case 'CLEAR_INPUT':
      return "";
    default:
      return state
  }
}