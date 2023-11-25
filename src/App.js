import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <p>Olá, mundo!</p>
      <Comentario nome='João' email="joao@email.com" data={new Date(2020, 3, 19)}/>
      <Comentario nome='Carlos' email="carlos@email.com" data={new Date(2023, 3, 19)}>
        Teste children
      </Comentario>
      <Comentario nome='Victor' email="victor@email.com" data={new Date(2020, 5, 19)}/>
    </div>
  );
}

export default App;
