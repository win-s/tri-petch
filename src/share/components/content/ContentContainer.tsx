
import { Theme } from './constant';

import './ContentContainer.scss';

export enum Sport {
    Athlete = 'athlete',
    Player = 'player',
}

export const ContentContainer: React.FC<{
    children: React.ReactElement | string | undefined,
    theme: Theme,
    sport: Sport,
}> = ({ theme, children, sport }) => {

    return (
        <div className={`${theme} content-container-wrapper`}>
            <div className={`content-container ${sport}`}>
                <div className="content-dummy-left"></div>
                <div className="content">{children}</div>
            </div>
        </div>)
}