import './App.css';
import { useState } from 'react';
import GoJsDiagram from './Components/GoJsDiagram/GoJsDiagram';
import 'bootstrap'
import SearchFrom from './Components/SearchForm/SearchFrom';
import { getSearchResult } from './Utils/utils'

function App() {
  const [diagramData, setDiagramData] = useState('')
  const onSearchSubmitted = (value) => {
    const diaramData = getSearchResult(value)
    setDiagramData(diaramData);

  }

  return (
    <div className="App container mt-5">
      <SearchFrom onSubmit={onSearchSubmitted} />
      <GoJsDiagram initData={diagramData} />

    </div>
  );
}

export default App;
