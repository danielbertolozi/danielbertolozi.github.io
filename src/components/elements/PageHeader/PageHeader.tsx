import "./PageHeader.css";

export interface IPageHeaderProps {
  text: string;
}

export function PageHeader(props: IPageHeaderProps) {
  return (
    <header className="home-header">
      <h1>{props.text}</h1>
    </header>    
  );
}
