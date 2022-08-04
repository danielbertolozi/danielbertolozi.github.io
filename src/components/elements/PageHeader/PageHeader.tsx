import "./PageHeader.css";
import {ArrowBackOutline} from "react-ionicons";
import { useNavigate } from "react-router-dom";

export interface IPageHeaderProps {
  text: string;
  showBackButton?: boolean;
}

export function PageHeader(props: IPageHeaderProps) {
  const nav = useNavigate();
  const classes = ["clickable"];
  if (!props.showBackButton) {
    classes.push("hidden");
  }
  return (
    <header className="page-header">
      <ArrowBackOutline
        color={"dddddd"}
        height="3em"
        width="3em"
        cssClasses={classes.join(" ")}
        onClick={() => nav("../")}
      />
      <span className="page-header-text">{props.text}</span>
    </header>    
  );
}
