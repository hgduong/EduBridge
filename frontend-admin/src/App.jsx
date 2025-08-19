import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import "./App.css"; 

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div></div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Navbar/>
        <Dashboard />
      </div>
    </div>
  );
}

export default App
