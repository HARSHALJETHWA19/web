import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./component/navbar";
import Student from "./component/addn";
import StudentList from "./component/list";
import Footer from "./component/footer";


function App() {

  return (
    <div className="App">
      <Router>
        <NavigationBar />
       
        <Container>
          <Routes>
            
            <Route
              path="student"
              element={<Student />}
            />
            <Route
              path="listStudents"
              element={<StudentList />}
            />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
