// import logo from './logo.svg';
import "./App.css";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";
import { useSelector } from "react-redux";

const App = () => {
  const isToggle = useSelector((state) => state.filter.isToggle);
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            {/* B2. Truyền props map với hàm nhận dữ liệu */}
            <Control />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {isToggle ? <Form /> : ""}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
};

export default App;
