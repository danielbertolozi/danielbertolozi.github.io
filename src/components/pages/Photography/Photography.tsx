import Constants from "../../../Constants";
import "./Photography.css";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import { PageHeader } from "../../elements/PageHeader/PageHeader";
import { ImageOutline, LogoDropbox } from "react-ionicons";
import axios from "axios";

export default function Photography() {
  axios.get("https://catfact.ninja/fact").then((response) => {
    alert(JSON.stringify(response.data));
  }).catch((reason) => {
    alert(JSON.stringify(reason));
  });
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
