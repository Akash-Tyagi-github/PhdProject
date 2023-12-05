import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import { Provider } from "react-redux";
import appStore from "./redux/store"

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Form />
      </Provider>
    </>
  );
}

export default App;
