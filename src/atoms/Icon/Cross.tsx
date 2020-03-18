import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Cross: FunctionComponent<Props> = (props) => {

  return (
      <span className="close"/>
  );
};

export default Cross;
