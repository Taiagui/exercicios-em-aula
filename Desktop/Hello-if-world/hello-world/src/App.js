import './App.css';
import Name from './components/Name';
import Relogio from './components/Relogio';
import Title from './components/Title'
import Subtitle from './components/Subtitle';
import UpperCase from './components/UperCasse';
import LowerCase from './components/LowerCase';
/*import Card from './components/Card'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <List />
      </header>
    </div>
  );
}

function App () {
  return (
    <div className="App">
      <header className="App-header">
      <Card />
      </header>
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello world
        </h1>
        <Name/>
        <Relogio/>
        <Title texto = "Quezia"/>
        <Title texto = "Taiana"/>
        <Title texto = "Nay"/>
        <Subtitle>Post</Subtitle>
        <Subtitle>Seguindo</Subtitle>
        <Subtitle>Seguidores</Subtitle>
        <UpperCase recebido= 'quezia'/>
        <LowerCase name= 'QUEZIA'/>
      </header>
    </div>
  );
}

export default App;
