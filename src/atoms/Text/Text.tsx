import React, { FunctionComponent } from 'react';

interface OwnProps {
  color: string,
  text: string
}

type Props = OwnProps;

const Text: FunctionComponent<Props> = ({color, text}) => {

  return (
      <span className={`text${color === "black" ? "-black" : "-blue"}`}>{text}</span>
  );
};

export default Text;
