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
        <div className='col-lg-12 col-md-12 history-comp p-2 border-info border mt-3'>
            <div className='history-title fw-bold mb-1'>
                History
            </div>
            <div className="history-content d-flex flex-wrap">
                {(store || {}).history.map((historyBlock, idx) => {
                    return (
                        <div onClick={historyItemClicked.bind(null, historyBlock.text, idx)} key={idx}>
                            <div
                                className='history-block mt-1'
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