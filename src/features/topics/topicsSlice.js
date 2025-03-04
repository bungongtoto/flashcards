import { createSlice, createAction } from "@reduxjs/toolkit";

export const addQuizId = createAction('addQuizId');

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const newtopicObject = { ...action.payload, quizIds: [] };
      state.topics[action.payload.id] = newtopicObject;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addQuizId, (state, action) => {
        state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    });
  },
});

export const { addTopic } = topicsSlice.actions;

export const selectAllTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;
