import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessaoas from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import  Form from './components/Form';

function App() {
  return (
    <div className='App' >
      <HelloWorld />
      <SayMyName nome="Julia" />

      <Pessaoas
        nome="Erika"
        idade="18"
        profissao="Front-end"
        foto="https://media.licdn.com/dms/image/v2/C4E0BAQFmCRTiAaDZrw/company-logo_200_200/company-logo_200_200/0/1656687183923/youx_group_logo?e=2147483647&v=beta&t=Cc-ySXJ7zozd9wdTusVK35l3MV-FqxnIE97nJdT5hO4"
      />
  
      <List/>

      <Evento/>


    </div>
  );
}

export default App;