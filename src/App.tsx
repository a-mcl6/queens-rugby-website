import { Routes, Route } from "react-router-dom";
import PageWrapper from "./components/layout/PageWrapper";

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" />
      </Routes>
    </PageWrapper>
  );
}

export default App;