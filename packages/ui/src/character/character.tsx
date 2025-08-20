import type { CSSProperties, ReactNode } from "react";
import "./character.css";

interface CharacterProps {
  children: ReactNode;
  style?: CSSProperties;
  bgStyle?: CSSProperties;
  bgClassname?: string;
  textStyle?: CSSProperties;
  textClassname?: string;
}

export const Character = ({
  children,
  style,
  bgClassname = "",
  bgStyle,
  textClassname = "",
  textStyle,
}: CharacterProps) => {
  return (
    <div className='pht-char' style={style}>
      <span className={"pht-char-bg " + bgClassname} style={bgStyle}></span>
      <span style={textStyle} className={textClassname}>
        {children}
      </span>
    </div>
  );
};
