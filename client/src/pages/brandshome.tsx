import React, { useRef } from 'react';
import {useRouter} from "next/router";
import BrandsHomeMain from "../components/BrandsHomeMain";

interface Props {
    title: string;
}

const Brandshome: React.FC<Props> = (props) => {

    return (
        <BrandsHomeMain />
    );
};

export default Brandshome;
