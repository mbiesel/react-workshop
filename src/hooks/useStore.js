import React from 'react';
import create from 'zustand';

export const useStore = create((set) => ({
    id: '45',
    setId: (id) => {
        set({ id: id.toString() });
    },
    filter: null,
    setFilter: (filter) => {
        set({ filter });
    },
    launchRange: null,
    setLaunchRange: (launchRange) => {
        set({ launchRange });
    },
}));
