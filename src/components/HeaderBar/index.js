import React from 'react';

import './styles.scss';
import Button from '../../uiComponents/Button';
import { useAppContext } from '../../context/AppContext';
import { useStore } from '../../hooks/useStore';

const className = 'HeaderBar';

const HeaderBar = () => {
    console.log('rerender: HeaderBar');
    const { filter, setFilter, setLaunchRange } = useAppContext();

    const submitLaunchRange = (launchRange) => {
        setLaunchRange(launchRange);
        setFilter('');
    };

    const search = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className={className}>
            <input onChange={search} value={filter ?? ''} placeholder="Search..." />
            <Button classPrefix={className} label="all" onClickHandler={() => submitLaunchRange(null)} />
            <Button classPrefix={className} label="next" onClickHandler={() => submitLaunchRange('next')} />
            <Button classPrefix={className} label="upcoming" onClickHandler={() => submitLaunchRange('upcoming')} />
            <Button classPrefix={className} label="past" onClickHandler={() => submitLaunchRange('past')} />
        </div>
    );
};

export default HeaderBar;
