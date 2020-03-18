import React, { FunctionComponent } from 'react';
import Text from "../../atoms/Text/Text";

interface OwnProps {}

type Props = OwnProps;

const Card: FunctionComponent<Props> = (props) => {

    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="card-text">
                    <Text
                        color="black"
                        text="PLN"
                    />
                    <Text
                        color="blue"
                        text="EUR"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
