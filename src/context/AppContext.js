import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext(null);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ defaultId, children }) => {
    const [ launchRange, setLaunchRange ] = useState(null);
    const [ filter, setFilter ] = useState(null);
    const [ id, setId ] = useState(defaultId);

    const handleIdChange = useCallback((newId) => {
        setId(String(newId));
    }, []);

    const defaultContextValues = {
        id,
        handleIdChange,
        launchRange,
        setLaunchRange,
        filter,
        setFilter,
    };

    return (
        <AppContext.Provider value={defaultContextValues}>
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    defaultId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
