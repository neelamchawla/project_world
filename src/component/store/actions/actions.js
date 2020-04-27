export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const ageUpAsnc = (val) => {
    return {type: 'AGE_UP', value: val};
};


export const ageUp = (val) => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            // we can change the action value using this below, this will increment value by 2
            val++;
            dispatch(ageUpAsnc(val));
        }, 5000)
    }
};


export const ageDown = (val) => {
    return {type: 'AGE_DOWN', value: val};
};