import { ReactComponent as Heart } from "../Assets/media/icons/heart.svg";
import { ReactComponent as Star } from "../Assets/media/icons/star.svg";
import { useState, useEffect } from "react";

function CarouselContent({ data }) {
  const { image, title, description, category, rates } = data;

  return (
    <div className="carousel-content">
      <div className="carousel-image-content">
        <div
          className={"carousel-image-bg "}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        ></div>
        <div className="carousel-main-content">
          <div className="text-container">
            <div className="headline">
              <h1>{title}</h1>
            </div>
            <div className="ratings-container">
              <div className="rating">
                <div className="star">
                  <Star />
                </div>
                <div className="text">
                  <span>{rates}</span>
                </div>
              </div>
              <div className="info-text">
                <p>{category.join(", ").toString()}</p>
              </div>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="buttons">
              <div className="button filled">
                <div className="text">
                  <span>Watch Now !</span>
                </div>
              </div>
              <div className="button bordered icon-button">
                <div className="icon">
                  <Heart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImageCarousel({ data }) {
  const [active, setActive] = useState(0);
  const [fromActive, setFromActive] = useState(0);

  const switchContent = (index) => {
    setFromActive(active);
    setActive(index);
  };

  const ctocn = (cn, c, cc = "") => (c ? cn : cc);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1 === data.length ? 0 : prev + 1)),
      5000
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="image-carousel">
      <div className="carousel-contents">
        {data
          .filter((_, i) => i === active)
          .map((d) => (
            <CarouselContent data={d} />
          ))}
      </div>
      <div className="carousel-info">
        <div className="carousel-buttons">
          <div className="carousel-button active">
            <span>Overview</span>
          </div>
          <div className="carousel-button">
            <span>Episodes</span>
          </div>
          <div className="carousel-button">
            <span>Details</span>
          </div>
        </div>
        <div className="carousel-indicators">
          {data.map((_, index) => (
            <div
              className={
                "carousel-indicator " +
                ctocn(
                  "active",
                  index === active,
                  ctocn("from-active", index === fromActive)
                )
              }
              onClick={() => switchContent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
