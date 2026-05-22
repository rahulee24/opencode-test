import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { Dashboard } from './components/data/Dashboard';
import { Analytics } from './components/Analytics';
import { Charts } from './components/Charts';
import { Users } from './components/Users';
import { Settings } from './components/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
