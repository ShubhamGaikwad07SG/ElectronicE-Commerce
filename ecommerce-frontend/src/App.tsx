import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>

    <BrowserRouter>
  <Navbar />

       
    <AppRoutes />

  <Footer />
</BrowserRouter>
    </>
  );
}

export default App;