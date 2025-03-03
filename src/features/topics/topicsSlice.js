import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const newtopicObject = {...action.payload, quizIds: []}
            state.topics[action.payload.id] = newtopicObject
        }
    }
});

export const {addTopic} = topicsSlice.actions;

export const selectAllTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;