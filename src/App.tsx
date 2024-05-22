import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

const App = () => {
  let items = ["New York", "Philadelphia", "Boston", "Arlington", "Houston"];
  const handleSelectedItem = (item: string) => console.log(item);
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

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
        <Button color="primary" onClick={() => setCount(count + 1)}>
          <h6>Click to increment</h6>
        </Button>
        <Button color="danger" onClick={() => setCount(0)}>
          <h6>Reset</h6>
        </Button>
        <p>{count}</p>
      </div>

      <div>
        <Button onClick={() => setShowAlert(true)}>Click to alert</Button>
        {showAlert && (
          <Alert color="danger" onClose={() => setShowAlert(false)}>
            This is an alert
          </Alert>
        )}
      </div>
    </>
  );
};

export default App;
