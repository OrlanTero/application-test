import { useState, useRef } from "react";

export default function FlexImageSquare({ data, title: fwTitle }) {
  const [pos, setPos] = useState(null);
  const [active, setActive] = useState(false);
  const container = useRef(null);

  const onMouseDown = (e) => {
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
          className="flex-images-square"
          ref={container}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          {data.map(({ image }) => (
            <div className="item">
              <div
                className="background-img"
                style={{
                  backgroundImage: `url("${image}")`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
