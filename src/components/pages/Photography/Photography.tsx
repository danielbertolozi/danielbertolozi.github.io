import Constants from "../../../Constants";
import "./Photography.css";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import { PageHeader } from "../../elements/PageHeader/PageHeader";
import { ImageOutline, LogoDropbox } from "react-ionicons";
import { FlickrClient } from "../../../Photography/FlickrClient";

export default function Photography() {
  new FlickrClient().getPhotos().then((response) => {
    alert("Provided API Key " + process.env.REACT_APP_FLICKR_KEY);
    alert(JSON.stringify(response.data));
  })
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
