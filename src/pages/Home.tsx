import { useNavigate } from "react-router-dom";


export default function Home() {
  const nav = useNavigate();

  function navigateToCars() {
    nav("/cars");
  }

  function navigateToPhotos() {
    nav("/photos");
  }

  return (
    <div>
      <header>
        <h1>danielbertolozi.github.io</h1>
        <span>Lorem Y e etc</span>
      </header>
      <div>
        <div>
          <span>Profissional</span>
        </div>
        <div>
          <span onClick={navigateToCars}>Carros</span>
        </div>
        <div>
          <span onClick={navigateToPhotos}>Fotografia</span>
        </div>
      </div>
    </div>
  );
}
