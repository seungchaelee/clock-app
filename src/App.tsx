import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { Clock } from "@/features/clock/Clock";
import OldClock from "./OldClock";

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <OldClock />
      <div>상단 OldClock / 하단 Clock</div>
      <Clock />
    </div>
  </Provider>
);

export default App;
