import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import ScoreBar from './components/ScoreBar'
import CardList from './components/CardList'

function App() {
  return (
    <Container>
      <Header />
      <ScoreBar />
      <CardList />
    </Container>
  );
}

export default App;
