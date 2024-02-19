'use client'
import { useRef, useContext } from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './Athletes.module.scss';

import { Header } from "./Header";

import { SwiperMobile } from '@/share/components/swiper/SwiperMobile';
import { ContentContainer, Sport } from '@/share/components/content/ContentContainer';
import { Content } from '@/share/components/content/Content';
import { Theme } from '@/share/components/content/constant';


import { ScreenSizeContext } from '@/share/contexts';
import { Device } from '@/share/constants';
import { ImageContainer } from '@/share/components/image/ImageContainer';

import athletesDesktopPicture from "../../../public/athletes-desktop.png";
import athletesTabletPicture from "../../../public/athletes-tablet.png";
import athletesMobilePicture from "../../../public/athletes-mobile.png";



export const Athletes: React.FC = () => {
    const device = useContext(ScreenSizeContext);
    const athleteslElementRef = useRef(null);
    return (
        <div className={styles.athletesWrapper}>

            <Header sport={Sport.Athlete}>ATHLETES</Header>

            {
                device === Device.Mobile
                &&
                <ImageContainer>
                    <Image

                        src={athletesMobilePicture}
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
                        src={athletesTabletPicture}
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
                        className={styles.athletesDesktop}
                        src={athletesDesktopPicture}
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
                    <div className="swiper swiper-big-screen-container" ref={athleteslElementRef}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">

                                <Content
                                    theme={Theme.Theme1}
                                    sport={Sport.Athlete}
                                    num="01"
                                    header="CONNECTION"
                                >Connect with coaches directly, you can ping coaches to view profile.</Content>

                            </div>
                            <div className="swiper-slide">
                                <Content
                                    theme={Theme.Theme2}
                                    sport={Sport.Athlete}
                                    num="02"
                                    header="COLLABORATION"
                                >Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</Content>
                            </div>
                            <div className="swiper-slide">
                                <Content
                                    theme={Theme.Theme3}
                                    sport={Sport.Athlete}
                                    num="03"
                                    header="GROWTH"
                                >Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc </Content>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>

            </div>
            <SwiperMobile elementRef={athleteslElementRef} ></SwiperMobile>
        </div>
    )
}