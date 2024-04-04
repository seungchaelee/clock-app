import { createSlice } from "@reduxjs/toolkit";

interface ClockState {
  currentTime: string; // Date 객체 대신 문자열을 사용
}

const initialState: ClockState = {
  currentTime: new Date().toISOString(), // 초기 상태를 ISO 문자열로 설정
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    updateTime: (state) => {
      state.currentTime = new Date().toISOString(); // 현재 시간을 ISO 문자열로 업데이트
    },
  },
});

export const { updateTime } = clockSlice.actions;
export default clockSlice.reducer;

