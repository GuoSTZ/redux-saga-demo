let id = 0;
const persons = (state = [], action) => {
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
    default:
      return state;
  }
};

export default persons;
