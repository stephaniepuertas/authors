import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Edit from './pages/Edit';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/authors" element={<Dashboard />} />
        <Route path="/authors/:author_id" element={<Details />} />
        <Route path="/authors/edit/:author_id" element={<Edit />} />
      </Routes>
    </fieldset>
  );
}

export default App;