import './App.css';
import ProjectTile from './components/ProjectTile';

const App = () => {
  return (
    <main className="app-main">
      <header className="app-header">Portfolio Suite</header>
      <div className="app-card">
        <ProjectTile title="User List" description="Searchable list of users" />
      </div>
    </main>
  );
};

export default App;
