import { createSlice } from "@reduxjs/toolkit";

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
    builder.addCase(addQuiz, (state, action) => {
        state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    });
  },
});

export const { addTopic, addQuiz } = topicsSlice.actions;

export const selectAllTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;
