
const { createStore } = Redux;

const initState = {
 todos: [],
  posts: []
}

function myreducer(state = initState, action){
  console.log(action, state)
  if (action.type == 'ADD_TODO'){
    return {
      // posts: [],
      ...state, 
      todos: [...state.todos, action.todo]
      
    }
  }
  
  if (action.type == 'ADD_POST'){
    return {
      // posts: [],
      ...state, 
      posts: [...state.posts, action.post]
      
    }
  }
}

const store = createStore(myreducer);

store.subscribe(() => {
  console.log('state updates');
  console.log(store.getState());
})

// const todoAction = { type: 'ADD_TODO', todo: 'Buy milk' };

// store.dispatch(todoAction)
store.dispatch({ type: 'ADD_TODO', todo: 'Buy milk' });
store.dispatch({ type: 'ADD_TODO', todo: 'sleep' });
store.dispatch({ type: 'ADD_POST', post: 'Buy eggs' });
