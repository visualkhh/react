import {createSlice, Draft} from '@reduxjs/toolkit';

//reducer
// const initialState = {value: 0}; // 초기 상태 정의
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state: Draft<any>) => {
//             state.value += 1
//         },
//         decrement: (state: Draft<any>) => {
//             state.value -= 1
//         },
//     },
// });
// export const {increment, decrement} = counterSlice.actions; // 액션 생성함수
// export default counterSlice.reducer; // 리듀서


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
