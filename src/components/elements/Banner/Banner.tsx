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
        onClick={props.onClick}
        style={{
          backgroundImage: `url(${props.bg})`
        }}>
        <div className="banner-inner-container">
          <span
            className="banner-text">{props.text}</span>
        </div>
      </div>
  );
}
