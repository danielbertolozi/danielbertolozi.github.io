import Constants from "../../../Constants";
import "./Photography.css";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";

export default function Photography() {
    return (
        <BackgroundWithOverlay
          backgroundUrl={Constants.PHOTOS_BANNER_URL}>
            <span>Photos</span>
        </BackgroundWithOverlay>
    );
}
