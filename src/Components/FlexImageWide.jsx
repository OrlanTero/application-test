import { useRef, useState } from "react";
import { ReactComponent as Star } from "../Assets/media/icons/star.svg";

export default function FlexImageWide({ data, title: fwTitle, onClick }) {
  const [pos, setPos] = useState(null);
  const [active, setActive] = useState(false);
  const container = useRef(null);

  const onMouseDown = (e) => {
    e.stopPropagation();
    setActive(true);
    setPos({
      ...{
        left: container.current.scrollLeft,
        top: container.current.scrollTop,
        x: e.clientX,
        y: e.clientY,
      },
    });
  };

  const onMouseMove = (e) => {
    if (active) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      container.current.scrollTop = pos.top - dy;
      container.current.scrollLeft = pos.left - dx;
    }
  };

  const onMouseUp = () => {
    setActive(false);
  };

  return (
    <div className="flex-container">
      <div className="container-top">
        <div className="title">
          <h1>{fwTitle}</h1>
        </div>
      </div>
      <div className="container-body">
        <div
          className="flex-images-wide"
          ref={container}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          {data.map((item) => {
            const { image, title, category, rates } = item;
            return (
              <div className="item">
                <div
                  className="background-img"
                  style={{
                    backgroundImage: `url("${image}")`,
                  }}
                ></div>
                <div
                  className="description"
                  onClick={(e) => {
                    onClick && onClick(item);
                  }}
                >
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
