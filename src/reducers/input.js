
const input = (state = [], action) => {
  switch (action.type) {
    case 'Message':
    console.log("user action:",action);
      return [
        ...state,
        {

          text: action.text,
          completed: false
        }
      ]

    default:
      return state
  }
}

export default input
