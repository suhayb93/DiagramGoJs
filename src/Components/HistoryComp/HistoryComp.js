import './_history.scss'
import React, { useContext } from 'react'

import { GlobalStore } from '../../Utils/context';

function HistoryComp(props) {

    const store = useContext(GlobalStore);

    const historyItemClicked = (text, idx) => {
        if ('onHistoryNodeClicked' in props) {
            props.onHistoryNodeClicked(text);
            store.removeHistoryItem(idx);
        }
    }

    return (
        <div className='history-comp p-3 border-info border mt-3'>
            <div className='history-title fw-bold mb-3'>
                History
            </div>
            <div className="history-content row">
                {(store || {}).history.map((historyBlock, idx) => {
                    return (
                        <div onClick={historyItemClicked.bind(null, historyBlock.text, idx)} className="col-lg-4 mb-4" key={idx}>
                            <div
                                className='history-block'
                                title={historyBlock.text}
                            >
                                {`(${idx + 1})`} {historyBlock.text}
                            </div>
                        </div>


                    )
                })}
            </div>

        </div>
    )
}

export default HistoryComp;