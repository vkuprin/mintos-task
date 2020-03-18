import React, { FunctionComponent } from 'react';
import CountryBox from "../organisms/CountryBox/CountryBox";

interface OwnProps {}

type Props = OwnProps;

const Demo: FunctionComponent<Props> = (props) => {

  return (
      <div className="center-absolute">
          {/*<CountryBox/>*/}
          <div className="card-wrapper">
           <div className="card-country">
               <div className="card-country-yes">EUR</div>
               <div className="card-country-no">PLN</div>
           </div>
          </div>
      </div>
  );
};

export default Demo;
