import "./Banner.css";

export interface IBannerProps {
  onClick: () => void;
  text: string;
  bg: string;
}

export function Banner(props: IBannerProps) {
  return (
      <div 
        className="clickable banner-container"
        style={{
          backgroundImage: `url(${props.bg})`
        }}>
        <div className="banner-inner-container">
          <span
            className="banner-text"
            onClick={props.onClick}>{props.text}</span>
        </div>
      </div>
  );
}
