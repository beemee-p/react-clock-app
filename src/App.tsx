import { ReactElement } from "react";
import Clock from "./components/Clock";
import { RecoilRoot } from "recoil";

const App = (): ReactElement => {
  return (
    <RecoilRoot>
      <div className="App">
        <Clock />
      </div>
    </RecoilRoot>
  );
};

export default App;
