// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { forwardRef } from "react";
import styles from "./BusinessCard.module.scss";

export type position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  angle: string;
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
  onClick: (x: number) => void;
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
      onClick
    }: IBusinessCard,
    ref
  ) => {
    const onCursorEnter = () => {
      onHover(id);
    };

    const onCursorLeaves = () => {
      onHoverExit(id, angle);
    };

    const onCursorClick = () => {
      onClick(id);
    }

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
        onClick={onCursorClick}
        ref={ref}
      >
        <div className={styles.top}><a href={info?.links.github} target='_blank' rel="noopener noreferrer">{info?.links.github}</a></div>
        <div className={styles.mid}>{info?.title}</div>
        <div className={styles.bottom}>
          <ul>
            {info?.stack.map((tool, index) => {
              return (
                <div key={index} className={styles.tool}>
                  <span>{tool}</span>
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
