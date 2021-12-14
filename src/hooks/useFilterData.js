import { useState, useEffect } from 'react';

export const useFilterData = (initData, prop) => {
    const [ data, setData ] = useState(initData);
    const [ filter, setFilter ] = useState(null);

    useEffect(() => {
        if (!prop || !filter) {
            setData(initData); // this is necessary to remove filter, backspace
            return;
        }

        const filteredData = initData.filter((ele) => {
            return ele[prop].toLowerCase().indexOf(filter.toLowerCase()) > -1;
        });

        setData(filteredData);
    }, [ filter, prop, initData ]);

    return [ data, setFilter ];
}