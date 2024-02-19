
import { Sport, ContentContainer } from '../../share/components/content/ContentContainer';
import { Theme } from '../../share/components/content/constant';

import "./Header.scss";

export enum Direction {
    left, right, non
}

export const Header: React.FC<{
    children: string,
    sport: Sport,

}> = ({ children, sport }) => {

    return (

        <div className="header">
            <ContentContainer
                theme={Theme.Theme1}
                sport={sport}>
                <div className={`sport-header`}>{children}</div>

            </ContentContainer>
        </div>
    )
};