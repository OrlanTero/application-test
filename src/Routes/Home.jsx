import React, { useState } from "react";
import attackontitan from "../Assets/media/animes/attack-on-titan.png";
import ghostfighter from "../Assets/media/animes/ghost-fighter.png";
import bgImage from "../Assets/media/animes/kimetsu-1.png";
import jujutsu from "../Assets/media/animes/jujutsu.png";
import onepiece from "../Assets/media/animes/one-piece.png";
import hunter from "../Assets/media/animes/hunterxhunter.jpg";
import slumdunk from "../Assets/media/animes/slumdunk.png";
import recca from "../Assets/media/animes/flame-of-recca.png";

import ate1_1 from "../Assets/media/animes/attack/episode-1.png";
import ate1_2 from "../Assets/media/animes/attack/episode-1-2.png";
import ate2_1 from "../Assets/media/animes/attack/episode-2.png";
import ate2_2 from "../Assets/media/animes/attack/episode-2-2.jpg";
import ate3_1 from "../Assets/media/animes/attack/episode-3.png";
import ate3_2 from "../Assets/media/animes/attack/episode-3-2.jpg";

import FlexImageWide from "../Components/FlexImageWide";
import ImageCarousel from "../Components/ImageCarousel";
import FlexImageSquare from "../Components/FlexImageSquare";
import PreviewAnimeContainer from "../Components/PreviewAnimeContainer";

function Home() {
  const [pickAnime, setPickAnime] = useState(null);
  const data = [
    {
      image: bgImage,
      title: "Kimetsu no Yaiba",
      description:
        "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.",
      category: ["Adventure Fiction", "Dark fantacy", "Martial Arts"],
      rates: "5.0",
    },
    {
      image: attackontitan,
      title: "Attack On Titan",
      description:
        "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
      category: ["Adventure Fiction", "Dark fantacy", "Martial Arts"],
      rates: "4.5",
      episodes: [
        {
          number: 1,
          images: [ate1_1, ate1_2],
          description:
            "The citizens worry they will be at the Titans' mercy after many years of peace.",
        },
        {
          number: 2,
          images: [ate2_1, ate2_2],
          description:
            "The Shiganshina citizens are under attack from the Titans.",
        },
        {
          number: 3,
          images: [ate3_1, ate3_2],
          description:
            "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.",
        },
      ],
    },
    {
      image: jujutsu,
      title: "Jujutsu Kaisen",
      description:
        "Jujutsu Kaisen: is broken into many different story arcs. The following page provides information on the story arcs, such as the arc name, a brief description of the arc, and the chapters within the arc. Currently, Jujutsu Kaisen has 12 arcs, spanning 170 chapters, 24 episodes and 1 movie. 5 Vs. Mahito Arc",
      category: ["Adventure Fiction", "Martial Arts"],
      rates: "5.0",
    },
    {
      image: onepiece,
      title: "One Piece",
      description:
        "One Piece: is a Japanese anime television series based on Eiichiro Oda 's manga series of the same name. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit.",
      category: ["Adventure Fiction", "Comedy", "Family"],
      rates: "5.0",
    },
    {
      image: hunter,
      title: "Hunter X Hunter",
      description:
        "Hunter × Hunter: is an anime television series that aired from 1999 to 2001 based on Yoshihiro Togashi’s Hunter × Hunter manga. The story focuses on a young boy named Gon Freecss, who one day discovers that the father he had always been told was dead is in fact alive and well.",
      category: ["Adventure Fiction", "Martial Arts"],
      rates: "5.0",
    },
  ];

  const flexSquareData = [
    {
      image: ghostfighter,
    },
    {
      image: slumdunk,
    },
    {
      image: recca,
    },
  ];

  const onClick = (data) => setPickAnime(data);

  return (
    <div className="main-contents">
      <div className="home-big-container">
        <ImageCarousel data={data} />
      </div>

      {pickAnime === null && (
        <React.Fragment>
          <FlexImageWide
            data={data}
            title={
              <React.Fragment>
                Trending <span class="colored yellow">this week</span>
              </React.Fragment>
            }
            onClick={onClick}
          />
          <FlexImageSquare data={flexSquareData} title="Throwback Anime!" />
        </React.Fragment>
      )}

      {pickAnime !== null && (
        <PreviewAnimeContainer
          anime={pickAnime}
          title={
            <React.Fragment>
              Trending <span class="colored yellow">this week</span>
            </React.Fragment>
          }
        />
      )}
    </div>
  );
}

export default Home;
