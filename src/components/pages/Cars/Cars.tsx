import "./Cars.css";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import Constants from "../../../Constants";
import { PageHeader } from "../../elements/PageHeader/PageHeader";

export default function Cars() {
    return (
        <BackgroundWithOverlay
          backgroundUrl={Constants.CARS_BANNER_URL}>
          <PageHeader
            showBackButton={true}
            text="Carros"/>
        </BackgroundWithOverlay>
    );
}