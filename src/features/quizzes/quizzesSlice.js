import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState:{
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        },
    }
});

export const {addQuiz} = quizzesSlice.actions;

export const selectAllQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;