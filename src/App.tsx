import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["New York", "Philadelphia", "Boston", "Arlington", "Houston"];
  const handleSelectedItem = (item: string) => console.log(item);
  const onButtonClick = () => console.log("Clickety click");
  const getButtonColor = "danger";

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
        <Button onClick={onButtonClick}>
          <h6>This is a button</h6>
        </Button>
      </div>
    </>
  );
};

export default App;
