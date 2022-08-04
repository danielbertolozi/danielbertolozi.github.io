import "./Cars.css";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import Constants from "../../../Constants";

export default function Cars() {
    return (
        <BackgroundWithOverlay
          backgroundUrl={Constants.CARS_BANNER_URL}>
          <span>cars</span>
        </BackgroundWithOverlay>
    );
}