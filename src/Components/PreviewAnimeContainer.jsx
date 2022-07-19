import { ReactComponent as Star } from "../Assets/media/icons/star.svg";
import { useEffect, useState } from "react";

export default function PreviewAnimeContainer({ anime, title: fwTitle }) {
  const { image, title, category, rates, episodes = [] } = anime;

  return (
    <div className="flex-container">
      <div className="container-top">
        <div className="title">
          <h1>{fwTitle}</h1>
        </div>
      </div>
      <div className="container-body">
        <div className="flex-2-grid-container">
          <div className="grid-left">
            <div className="grid-top">
              <div className="anime-container">
                <div
                  className="background-img"
                  style={{
                    backgroundImage: `url("${image}")`,
                  }}
                ></div>
                <div className="description">
                  <div className="left">
                    <p>{title}</p>
                    <span>{category.join(", ").toString()}</span>
                  </div>
                  <div className="right">
                    <div className="rating">
                      <div className="star">
                        <Star />
                      </div>
                      <div className="text">
                        <span>{rates}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-bot">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  voluptatem ipsum esse nihil. Laudantium dolorum iure
                  consequatur tempore quae necessitatibus? Dolorem iste quisquam
                  labore veritatis? Suscipit tempore, nobis ducimus aut eius
                  amet enim sit sint magni neque, voluptate sunt laborum
                  cupiditate animi. Dolore minus excepturi, expedita earum
                  commodi eaque magnam.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-right">
            <div className="grid-top">
              <div className="flex-header">
                <p>Episodes</p>
                <p>Season 1</p>
              </div>
            </div>
            <div className="grid-bot">
              {episodes.map((episode) => (
                <EpisodeItem anime={anime} episode={episode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EpisodeItem({ episode }) {
  const { number, description, images = [] } = episode;
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    if (images.length < 2) return;
    let index = 0;

    const intt = setInterval(() => {
      if (index + 1 >= images.length) {
        index = 0;
        setImage(images[0]);
      } else {
        index++;
        setImage(images[index]);
      }
    }, 3000);

    return () => clearInterval(intt);
  }, []);

  return (
    <div className="grid-item">
      <div
        className="image"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></div>
      <div className="description">
        <p className="title">Episode {number}</p>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
}
