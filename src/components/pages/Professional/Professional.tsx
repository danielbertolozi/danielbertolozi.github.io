import Constants from "../../../Constants";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import "./Professional.css";

export default function Professional() {
    return (
        <BackgroundWithOverlay
          backgroundUrl={Constants.PRO_BANNER_URL}>
            <span>Professional</span>
        </BackgroundWithOverlay>
    );
}