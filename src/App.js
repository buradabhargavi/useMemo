import "./App.css";
import Demo from "./components/Demo";
import Button from "./UI/Button";
import { useCallback, useState, useMemo } from "react";

function App() {
  const [listTitle, setListTitle] = useState("MY LIST");
  const [ascending, setAscending] = useState(true);

  const changeTitle = useCallback(() => {
    setListTitle("OUR LIST");
  }, []);

  const changeprocess = useCallback(() => {
    setAscending((prevAscending) => !prevAscending);
  }, []);

  const sortedListItems = useMemo(() => {
    return ascending
      ? [1, 3, 9, 7, 5].sort((a, b) => a - b)
      : [1, 3, 9, 7, 5].sort((a, b) => b - a);
  }, [ascending]);

  return (
    <div className="App">
      <Demo title={listTitle} items={sortedListItems}></Demo>
      <Button onClick={changeTitle}>Change Title</Button>
      <Button onClick={changeprocess}>
        {ascending ? "Descending" : "Ascending"}
      </Button>
    </div>
  );
}

export default App;
