import "./App.css";
import Intro from "./components/Intro/Intro.js";
import NavBar from "./components/NavBar/NavBar.js";
import CardLeft from "./components/Cards/CardLeft/CardLeft.js";
import CardRight from "./components/Cards/CardRight/CardRight.js";
import CardDual from "./components/Cards/CardDual/CardDual.js";
import cards from "./local/homeCards.json";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <main className="container" id="home">
        <div className="introDiv"></div>

        <Intro></Intro>

        <CardLeft
          alt={cards[0].alt}
          img={cards[0].img}
          text={cards[0].text}
          title={cards[0].title}
        />

        <div className="inbetween bg-one"></div>
        <CardRight
          alt={cards[1].alt}
          img={cards[1].img}
          text={cards[1].text}
          title={cards[1].title}
        />

        <div className="inbetween bg-two"></div>
        <CardLeft
          alt={cards[2].alt}
          img={cards[2].img}
          text={cards[2].text}
          title={cards[2].title}
        />
        <div className="inbetween bg-three"></div>
        <CardRight
          alt={cards[3].alt}
          img={cards[3].img}
          text={cards[3].text}
          title={cards[3].title}
        />
        <div className="inbetween bg-four"></div>
        <CardLeft
          alt={cards[4].alt}
          img={cards[4].img}
          text={cards[4].text}
          title={cards[4].title}
        />
        <div className="spacer1"></div>

        <CardDual></CardDual>

        <div className="spacer2"></div>
      </main>
      <footer>page by: Dustin Erwin Copyright 2021</footer>
    </div>
  );
}

export default App;
