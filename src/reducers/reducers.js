export default function counter(state = [], action) {
  switch (action.type) {
    case 'INCREASE':
      return state.concat([
        {
          key: action.value.name,
          name: action.value.name,
          age: action.value.age,
          sex: action.value.sex
        }
      ]);
    case 'DELETE':
      return state;
    default:
      return state;
  }
}
