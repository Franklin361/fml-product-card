import React from 'react';
import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import noimage from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";

export interface Props{
    image?:string;
    className?:string;
    style?: CSSProperties;
}

export const ProductImage = ({ image, className, style }:Props) => {
    
    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if(image){ imgToShow = image }
    else if(product?.image) {imgToShow = product.image}
    else {imgToShow = noimage}

    return (
        <img src={imgToShow} alt="Coffe Mug" className={`${styles.productImg} ${className}`} style={style} />
    )
}
