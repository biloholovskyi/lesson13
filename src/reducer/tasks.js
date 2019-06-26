export default function tasks(state = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      return action.text ? [...state, {id: state.length > 0 ? state[state.length - 1].id + 1 : 1, text: action.text, complete: false, visible: true}] : state;
    case "COMPLETE_TASK":
      const index = state.findIndex(elem => elem.id === action.id);
      const visible = state.filter(item => !item.visible);
      const newItem = visible.length > 0 ? {...state[index], complete: !state[index].complete, visible: false} : {...state[index], complete: !state[index].complete};
      return [...state.slice(0, index), newItem, ...state.slice(index + 1)];
    case "HIDDEN":
      return state.map(elem => {
        if(elem.complete) {
          elem.visible = !elem.visible;
          return elem;
        }
        return elem;
      });
    default:
      return state
  }
}