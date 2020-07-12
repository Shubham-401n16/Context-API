import React, { useContext } from 'react';
import PaginationContext from '../Contexts';

function Settings(props) {
    let data = useContext(PaginationContext);

    return (
        <div>
            <h1>Settings</h1>
            <label>Display Count</label>
            <input
                type='number'
                value={data.displayCount}
                onChange={(e) => {
                    data.setDisplayCount(parseInt(e.target.value));
                }} 
                />
                <label>Show Complete</label>
            <input type="checkbox" 
            checked={data.showCompleted} 
            onChange={(e) => {
                data.setShowCompleted(!data.showCompleted);
            }} />

        </div>
    );
}

export default Settings;