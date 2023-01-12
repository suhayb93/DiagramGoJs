import './App.css';
import React, { useRef, useState } from 'react';
import GoJsDiagram from './Components/GoJsDiagram/GoJsDiagram';
import 'bootstrap'
import SearchFrom from './Components/SearchForm/SearchFrom';
import { getSearchResult } from './Utils/utils'
import HistoryComp from './Components/HistoryComp/HistoryComp';
import { GlobalStore } from './Utils/context';
import DiagramInfo from './Components/DiagramInfo/DiagramInfo';
import Loader from './Components/Loader/Loader';
import SearchResults from './Components/SearchResults/SearchResults';


//Main component that contains all the project
function App() {
  const [diagramData, setDiagramData] = useState('')
  const prevSearchValue = useRef('');
  const [showLoader, setShowLoader] = useState(false)
  const [store, setStore] = useState({
    history: []
  });
  const [searchReult, setSearchResult] = useState([])
  const onSearchSubmitted = async (value) => {
    if (prevSearchValue.current === value) {
      return
    }
    setShowLoader(true)
    prevSearchValue.current = value;
    const { search_result, tax_result } = await getSearchResult(value)
    setShowLoader(false)
    setDiagramData(tax_result[0]);
    setSearchResult(search_result)
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
      <div style={{ position: 'relative' }}>
        {showLoader ?
          <Loader />

          : null}
        <div className="App container mt-5">

          <div className="row">
            <div className="">
              <SearchFrom onSubmit={onSearchSubmitted} />

            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">

              <div>
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
            <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
              <SearchResults searchReult={searchReult} />
            </div>
          </div>



        </div>
      </div>

    </GlobalStore.Provider>

  );
}

export default App;
