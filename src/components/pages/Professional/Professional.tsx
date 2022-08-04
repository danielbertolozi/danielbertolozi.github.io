import Constants from "../../../Constants";
import { BackgroundWithOverlay } from "../../elements/BackgroundWithOverlay/BackgroundWithOverlay";
import { PageHeader } from "../../elements/PageHeader/PageHeader";
import "./Professional.css";

export default function Professional() {
    return (
        <BackgroundWithOverlay
          backgroundUrl={Constants.PRO_BANNER_URL}>
          <PageHeader text="Profissional"/>
        </BackgroundWithOverlay>
    );
}