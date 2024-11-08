import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Erika"
  const newName = name.toUpperCase  
  
  function soma(a, b){
    return a+b
  }

  const url = 'https://media.licdn.com/dms/image/v2/C4E0BAQFmCRTiAaDZrw/company-logo_200_200/company-logo_200_200/0/1656687183923/youx_group_logo?e=2147483647&v=beta&t=Cc-ySXJ7zozd9wdTusVK35l3MV-FqxnIE97nJdT5hO4'

  return (
    <div>
      <p>Olá, {newName}</p>
      <p>Soma: {soma(3,2)}</p>
      <img src={url} alt='youX imagem'/>
    </div>
  );
}

export default App;
