import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.scss";
import './index.css';
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header/>
      <div className="container">
      <Outlet/>
      </div>
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
