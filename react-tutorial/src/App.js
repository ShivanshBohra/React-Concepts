import ArrayStateExample from "./components/ArrayStateExample";
import Child from "./components/LiftingStateUp.js/Child";
import ListRendering from "./components/ListRendering";
import ObjectStateExample from "./components/ObjectStateExample";
import ReactForm from "./components/ReactForm";
import Form from "./components/RegistrationForm.js/Form";
import Todolist from "./components/TodoList/Todolist";

function App() {
  {
    /* Section: Lifting State Up */
  }
  // function getData(data) {
  //   console.log(data);
  // }
  return (
    <>
      {/* Section: Lifting State Up */}
      {/* <Child getData={getData} /> */}

      {/*Section: React Form*/}
      {/* <ReactForm/> */}

      {/*Section: Registration Form*/}
      {/* <Form /> */}

      {/*Section: List Rendering in React */}
      {/* <ListRendering /> */}

      {/*Section: useState with Object */}
      {/* <ObjectStateExample /> */}

      {/*Section: useState with Array */}
      {/* <ArrayStateExample /> */}

      {/*Section: TodoList Project */}
      {/* <Todolist/> */}

      {/*Section: UseReducer Hook */}

    </>
  );
}

export default App;
