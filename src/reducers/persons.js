let id = 1;
const defaultData = [
  { key: 0, name: '小没', age: 12, sex: 1 }
]
const persons = (state = defaultData, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return state.concat([
        {
          key: id++,
          name: action.value.name,
          age: action.value.age,
          sex: action.value.sex
        }
      ]);
    case 'DELETE_PERSON':
      return state.filter((value, index, arr) => {
        return index !== action.index
      })
    default:
      return state;
  }
};

export default persons;
