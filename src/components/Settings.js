import React, { useContext } from 'react';
import { PaginationContext } from '../Contexts';

function Settings(props) {
    let data = useContext(PaginationContext);

    return (
        <div>
            <label>Display Count</label>
            <input
                type='number'
                value={data.displayCount}
                onChange={(e) => {
                    data.setDisplayCount(parseInt(e.target.value));
                }} />
            <input type="checkbox" checked={data.showComplete} onChange={() => {
                data.setShowComplete(!data.showComplete);
            }} />

        </div>
    );
}

export default Settings;