
import './ImageContainer.scss';

export const ImageContainer: React.FC<{
    children: React.ReactElement
}> = ({ children }) => {
    return (
        <div className="image-container">
            <div className="image-container-wrapper">
                <div className="image-container-img">
                    {children}
                </div>
            </div>
        </div>
    )
}
