'use client';

import { createContext, useEffect } from 'react';

import { Device } from '../constants';
import { useScreenSize } from '@/share/hooks/useClientScreenSize';

export const ScreenSizeContext = createContext<Device>(Device.Mobile);

export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const device = useScreenSize();

    return (
        <ScreenSizeContext.Provider value={device as Device}>
            {children}
        </ScreenSizeContext.Provider>
    )
}