import './App.css';
import AllEngagements from './Pages/AllEngagements/AllEngagements';
import BuiltInEvidence from './Pages/BuiltInEvidence/BuiltInEvidence';
import CreateEngagements from './Pages/CreateEngagements/CreateEngagements';
import Evidence from './Pages/Evidence/Evidence';
import LogIn from './Pages/LogIn/LogIn';
import TaskList from './Pages/TaskList/TaskList';
import Header from './Shared/Header/Header';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/task-list" element={
          <PrivateRoute>
            <TaskList />
          </PrivateRoute>} />

        <Route path="*" element={
          <PrivateRoute>
            <TaskList />
          </PrivateRoute>} />

        <Route path="all-engagements" element={
          <PrivateRoute>
            <AllEngagements />
          </PrivateRoute>} />

        <Route path="evidence" element={
          <PrivateRoute>
            <Evidence />
          </PrivateRoute>} />

        <Route path="create-engagements" element={
          <PrivateRoute>
            <CreateEngagements />
          </PrivateRoute>} />

        <Route path="built-in-evidence" element={
          <PrivateRoute>
            <BuiltInEvidence />
          </PrivateRoute>} />

        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
