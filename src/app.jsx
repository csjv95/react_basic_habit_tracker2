import Nav from "./componets/nav/nav";
import Input from "./componets/input/input";
import Habits from "./componets/habits";
import Reset from "./componets/reset/reset";
import "./app.css";

function App() {
  return (
    <main>
      <Nav />
      <Input />
      <Habits />
      <Reset />
    </main>
  );
}

export default App;
