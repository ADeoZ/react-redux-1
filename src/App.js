import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceFilter from './components/ServiceFilter';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <div className="Service">
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
