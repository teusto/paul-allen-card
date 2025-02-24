import { forwardRef } from "react";
import styles from "./BusinessCard.module.scss";

type position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

interface IBusinessCard {
  position: position;
  elevation: number;
  onHover: (x: number) => void;
  onHoverExit: (x: number) => void;
  id: number;
  angle?: string;
}

const BusinessCard = forwardRef(({ position, elevation, onHover, id, angle, onHoverExit }: IBusinessCard, ref) => {
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
        {id}
      </div>
    );
  }
);

export default BusinessCard;
