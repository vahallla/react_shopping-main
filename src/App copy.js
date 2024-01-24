import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Add2Component = () => {
  return (
    <>
      <Header />
      <Link to="/NewPage">Go to New Page</Link>
      <Routes>
        <Route path="*" element={<>이런 페이지는 없음</>} />
      </Routes>
      <Footer />
      <Link to="/test">Test Page</Link>
    </>
  );
};

export default Add2Component;
