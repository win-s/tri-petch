
import { useContext } from 'react';

import './Content.scss';

import { Sport, ContentContainer } from './ContentContainer';
import { Theme } from './constant';
import { ScreenSizeContext } from '@/share/contexts';
import { Device } from '@/share/constants';

export const Content: React.FC<{
    children: React.ReactElement | string,
    num: string,
    header: string,
    theme: Theme,
    sport: Sport,

}> = ({
    children, num, header, theme, sport
}) => {
        const device = useContext(ScreenSizeContext);
        const currentTheme = device === Device.Mobile ? Theme.Theme2 : theme;
        return (
            <div className="content-information">
                <ContentContainer
                    theme={currentTheme}
                    sport={sport}>
                    <>
                        <div className="content-header">
                            <div className="content-num">
                                <div className="conetent-num-text">{num}</div>
                                <div className="content-num-underline"></div>
                            </div>
                            <div className="content-header-text">
                                <span>{header}</span>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {children}
                        </div>
                    </>
                </ContentContainer>
            </div>
        )
    }