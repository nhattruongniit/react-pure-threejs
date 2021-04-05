import { Link } from 'react-router-dom'

import Stats from 'components/Stats';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to='/empty'>Empty</Link>
        <Link to='/transformone'>TransformOne</Link>
        <Link to='/transformtwo'>TransformTwo</Link>
        <Link to='/transformmany'>TransformMany</Link>
        <Link to='/arbiter'>Arbiter</Link>
      </div>
      <Stats />
    </div>
  );
}

export default App;
