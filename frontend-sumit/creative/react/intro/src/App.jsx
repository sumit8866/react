import logo from './logo.svg';
import './App.css';
import First from './';
import S2 from './S2';
import Props from './Props';
import State from './State';
import Studentresult from './Studentresult';
import Stateresult from './Stateresult';

function App() {
  return (
    <>
    {/* <h1>this is my page</h1>
  <S2></S2>
   */}
  
  {/* <Props demo={{name:"Sumit" , age:20}}></Props>
   */}
  {/* <Props demo={[{name:"Sumit" , age:20},{name:"raj",age:40},{name:"radha",age:4}]}></Props> */}

<State></State>

{/* <Studentresult Student={[{name:"sumit",s1:90,s2:88,s3:75},{name:"rahul",s1:30,s2:80,s3:55},{name:"abhi",s1:50,s2:48,s3:75}]}></Studentresult> */}

<Stateresult></Stateresult>

    </>
  );
}

export default App;
