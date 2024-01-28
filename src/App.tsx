import { ReactElement } from "react";
import { RecoilRoot } from "recoil";
import Clock from "./components/Clock";
import "./app.css";

const App = (): ReactElement => {
  return (
    <RecoilRoot>
      <div className="app">
        <Clock />
      </div>
    </RecoilRoot>
  );
};

export default App;
