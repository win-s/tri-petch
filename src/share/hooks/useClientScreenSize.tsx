import React, { useEffect, useState } from 'react';

import { Device, ScreenSize } from '@/share/constants';
import { throttle } from '@/share/lib/throttle';

export const getScreenDevice = (windowSize: number) => {
    let device = Device.Desktop;
    switch (true) {
        case windowSize <= ScreenSize.Mobile: { device = Device.Mobile; break; }
        case windowSize <= ScreenSize.Tablet: { device = Device.Tablet; break; }
        default: { device = Device.Desktop; break; }
    }
    return device;
}

export const useScreenSize = () => {
    const [size, setSize] = useState<Device>(Device.Mobile);
    useEffect(() => {
        const initialDevice = getScreenDevice(window.innerWidth);
        setSize(initialDevice);

        const setScreenSize = throttle(() => {
            const windowSize = window.innerWidth;
            const device = getScreenDevice(windowSize);
            if (device !== size) {
                setSize(device);
            }
        }, 500);

        window.addEventListener('resize', setScreenSize);
        return () => window.removeEventListener('resize', setScreenSize);
    })
    return size;
}