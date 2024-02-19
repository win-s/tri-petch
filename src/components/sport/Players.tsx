'use client'
import { useRef, useContext } from 'react';
import Image from 'next/image';

import styles from './Players.module.scss';

import { Header } from "./Header";

import { SwiperMobile } from '@/share/components/swiper/SwiperMobile';
import { ContentContainer, Sport } from '@/share/components/content/ContentContainer';
import { Content } from '@/share/components/content/Content';
import { Theme } from '@/share/components/content/constant';


import { ScreenSizeContext } from '@/share/contexts';
import { Device } from '@/share/constants';
import { ImageContainer } from '@/share/components/image/ImageContainer';

import playersDesktopPicture from "../../../public/players-desktop.png";
import playersTabletPicture from "../../../public/players-tablet.png";
import playersMobilePicture from "../../../public/players-mobile.png";

export const Players: React.FC = () => {
    const device = useContext(ScreenSizeContext);

    const playersElementRef = useRef(null);
    return (
        <div className={styles.playersWrapper}>

            <Header sport={Sport.Player} >PLAYERS</Header>

            {
                device === Device.Mobile
                &&

                <ImageContainer>
                    <Image
                        src={playersMobilePicture}
                        alt=""
                        fill={true}
                    ></Image>
                </ImageContainer>
            }
            {
                device === Device.Tablet
                &&
                <ImageContainer>
                    <Image
                        src={playersTabletPicture}
                        alt=""
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}

                    ></Image>
                </ImageContainer>
            }
            {
                device === Device.Desktop
                &&
                <ImageContainer>
                    <Image
                        src={playersDesktopPicture}
                        alt=""
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    ></Image>
                </ImageContainer>
            }

            <div className={styles.contentWrapper}>

                <div>
                    <div className="swiper swiper-big-screen-container" ref={playersElementRef}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">

                                <Content
                                    theme={Theme.Theme1}
                                    sport={Sport.Player}
                                    num="01"
                                    header="CONNECTION"
                                >Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</Content>

                            </div>
                            <div className="swiper-slide">
                                <Content
                                    theme={Theme.Theme2}
                                    sport={Sport.Player}
                                    num="02"
                                    header="COLLABORATION"
                                >Work with recruiter to increase your chances of findingtalented athlete.</Content>
                            </div>
                            <div className="swiper-slide">
                                <Content
                                    theme={Theme.Theme4}
                                    sport={Sport.Player}
                                    num="03"
                                    header="GROWTH"
                                >Save your time, recruit proper athlets for your team.</Content>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>


            <SwiperMobile elementRef={playersElementRef} ></SwiperMobile>
        </div>
    )
}