'use client'
import { MutableRefObject, useEffect, useContext } from 'react';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './SwiperMobile.scss';

import { removeClass, addClass } from '@/share/lib/styleUtils';
import { ScreenSizeContext } from '@/share/contexts';
import { Device } from '@/share/constants';

const CLASS_NAME = 'swiper-big-screen-container';

export const SwiperMobile: React.FC<{
    elementRef: MutableRefObject<HTMLElement | null>,
}> = ({ elementRef }) => {
    const device = useContext(ScreenSizeContext);

    useEffect(() => {

        let refSwiper: Swiper;

        if (elementRef.current && device === Device.Mobile) {
            removeClass(elementRef.current, CLASS_NAME);
            // console.log(elementRef.current.querySelector(".swiper-pagination"));
            refSwiper = new Swiper(elementRef.current, {
                pagination: {
                    el: elementRef.current.querySelector(".swiper-pagination") as HTMLElement,
                },
                modules: [Pagination]
            });
        }

        return () => {
            if (elementRef.current && device === Device.Mobile) {
                addClass(elementRef.current, CLASS_NAME);
            }
            refSwiper?.destroy();
        };
    }, [elementRef, device])


    return <></>;
}