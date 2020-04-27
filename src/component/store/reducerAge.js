// const initialState = {
//     age: 21
// };

// const reducer = (state = initialState, action) => {
//     const newState = {...state}

//     if (action.type === 'AGE_UP'){
//         newState.age++;
//     }

//     if (action.type === 'AGE_DOWN'){
//         newState.age--;
//     }
    
//     return newState;
// }

// export default reducer;

// ==================================
const initialState = {
    age: 21
    , history: []
};

const reducerAge = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case 'AGE_UP':
            // newState.age += action.value;
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat({
                    id: Math.random(),
                    age: state.age + action.value})
            }
            // break;
        
        case 'AGE_DOWN':
            // newState.age -= action.value;
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({
                    id: Math.random(),
                    age: state.age - action.value
                })
            }
            // break;

        case 'DEL_ITEM':
            // newState.age -= action.value;
            return {
                ...state,
                history: state.history.filter(res => res.id !== action.key)
            }
            // break;

        default :
            return newState;
    }
}

export default reducerAge;