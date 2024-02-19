'use client';

import { ScreenSizeProvider } from '../share/contexts';


export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <ScreenSizeProvider>
            {children}
        </ScreenSizeProvider>
    );
}