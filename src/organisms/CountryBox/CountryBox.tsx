import React, { FunctionComponent } from 'react';
import Card from "../../molecules/Card/Card";

interface OwnProps {}

type Props = OwnProps;

const CountryBox: FunctionComponent<Props> = (props) => {

  return (
      <>
          Country Box Wrapper
          <Card/>
      </>
  );
};

export default CountryBox;
