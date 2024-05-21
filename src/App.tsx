import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

const App = () => {
  let items = ["New York", "Philadelphia", "Boston", "Arlington", "Houston"];
  const handleSelectedItem = (item: string) => console.log(item);

  const [count, setCount] = useState(0);

  const onButtonClickInc = () => {
    setCount(count + 1);
  };

  const onButtonClickReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectedItem}
        />
      </div>

      <div>
        <Alert>
          <h3>Hello World</h3>
        </Alert>
      </div>

      <div>
        <Button color="primary" onClick={onButtonClickInc}>
          <h6>Click to increment</h6>
        </Button>
        <Button color="danger" onClick={onButtonClickReset}>
          <h6>Reset</h6>
        </Button>
        <p>{count}</p>
      </div>
    </>
  );
};

export default App;
