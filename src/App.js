import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import JobFeed from "./components/JobFeed";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobfeed" element={<JobFeed />} />
          <Route path="/details/:jobId" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
