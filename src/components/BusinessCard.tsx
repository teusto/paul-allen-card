import { forwardRef } from "react";
import styles from "./BusinessCard.module.scss";

type position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

type infoType = {
  title: string;
  links: { [key: string]: string };
  stack: string[];
};

interface IBusinessCard {
  position: position;
  elevation: number;
  onHover: (x: number) => void;
  onHoverExit: (x: number) => void;
  id: number;
  angle?: string;
  info?: infoType;
}

const BusinessCard = forwardRef(
  (
    {
      position,
      elevation,
      onHover,
      id,
      angle,
      onHoverExit,
      info,
    }: IBusinessCard,
    ref
  ) => {
    const onCursorEnter = () => {
      onHover(id);
    };

    const onCursorLeaves = () => {
      onHoverExit(id, angle);
    };

    return (
      <div
        style={{
          top: position.top,
          left: position.left,
          zIndex: elevation,
          rotate: angle,
        }}
        className={styles.wrapper}
        onMouseEnter={onCursorEnter}
        onMouseOut={onCursorLeaves}
        ref={ref}
      >
        <div className={styles.top}>{info?.links.github}</div>
        <div className={styles.mid}>{info?.title}</div>
        <div className={styles.bottom}>
          <ul>
            {info?.stack.map((tool, index) => {
              return (
                <div className={styles.tool}>
                  <span key={index}>{tool}</span>
                  {index !== info?.stack.length - 1 && <div />}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);

export default BusinessCard;
