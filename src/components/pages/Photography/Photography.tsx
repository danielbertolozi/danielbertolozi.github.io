import Constants from "../../../Constants";
import "./Photography.css";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import { PageHeader } from "../../elements/PageHeader/PageHeader";
import { ImageOutline, LogoDropbox } from "react-ionicons";

export default function Photography() {
    return (
        <BackgroundWithOverlay
          backgroundUrl={Constants.PHOTOS_BANNER_URL}>
          <PageHeader showBackButton={true} text="Fotografia"/>
          <div className="photography-content">
            <span> WIP</span>
            <ImageOutline
              height="2em"
              width="2em"
              color="dddddd" />
            <LogoDropbox
              height="2em"
              width="2em"
              color="dddddd" />
          </div>
        </BackgroundWithOverlay>
    );
}
