import { ReactNode } from "react";
import "./BackgroundWithOverlay.css";

export interface IBackgroundWithOverlayProps {
  backgroundUrl: string;
  children: ReactNode;
} 

export function BackgroundWithOverlay(props: IBackgroundWithOverlayProps) {
  return (
    <div 
      style={{ backgroundImage: `url(${props.backgroundUrl})` }}
      className="container-with-bg">
        <div className="container-bg-overlay"> 
          {props.children}
        </div>
    </div>
  );
}
