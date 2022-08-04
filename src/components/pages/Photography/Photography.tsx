import Constants from "../../../Constants";
import "./Photography.css";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import { PageHeader } from "../../elements/PageHeader/PageHeader";

export default function Photography() {
    return (
        <BackgroundWithOverlay
          backgroundUrl={Constants.PHOTOS_BANNER_URL}>
          <PageHeader text="Fotografia"/>
        </BackgroundWithOverlay>
    );
}
