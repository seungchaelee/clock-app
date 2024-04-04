import { combineReducers } from "@reduxjs/toolkit";
import clockReducer from "@/features/clock/clockSlice";

const rootReducer = combineReducers({
  clock: clockReducer,
  // 다른 리듀서들을 이곳에 추가
});

export default rootReducer;
