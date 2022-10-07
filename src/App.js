import './App.css';
import React, { useRef, useState } from 'react';
import GoJsDiagram from './Components/GoJsDiagram/GoJsDiagram';
import 'bootstrap'
import SearchFrom from './Components/SearchForm/SearchFrom';
import { getSearchResult } from './Utils/utils'
import HistoryComp from './Components/HistoryComp/HistoryComp';
import { GlobalStore } from './Utils/context';
import DiagramInfo from './Components/DiagramInfo/DiagramInfo';

function App() {
  const [diagramData, setDiagramData] = useState('')
  // const [history, setHistory] = useState([])
  const prevSearchValue = useRef('');
  const [store, setStore] = useState({
    history: []
  });
  const onSearchSubmitted = (value) => {
    if (prevSearchValue.current === value) {
      return
    }
    prevSearchValue.current = value;
    const _diaramData = getSearchResult(value)
    setDiagramData(_diaramData);
  }

  const addHistoryItem = (item) => {
    setStore(state => {
      return ({ ...state, history: state.history.concat([item]) })
    })
  }

  const removeHistoryItem = (index) => {
    setStore(state => {
      state.history.splice(index)
      return ({ ...state, history: state.history })
    })

  }

  const clearHistory = () => {
    setStore(store => ({ ...store, history: [] }))
  }

  return (
    <GlobalStore.Provider value={{ history: store.history, addHistoryItem, removeHistoryItem, clearHistory }}>
      <div className="App container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <SearchFrom onSubmit={onSearchSubmitted} />

            </div>

            <div className="row history-wrapper">
              <HistoryComp onHistoryNodeClicked={onSearchSubmitted} />

            </div>
            <div className="row">
              <GoJsDiagram
                initData={diagramData}
                onNodeClicked={onSearchSubmitted}
              />
            </div>
            <div className="row text-start">
              <DiagramInfo />
            </div>
          </div>
        </div>



      </div>
    </GlobalStore.Provider>

  );
}

export default App;
