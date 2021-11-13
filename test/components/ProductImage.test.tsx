import React from 'react';
import render from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';

import { product2 } from '../data/products';

describe('Product Image', () => {
    test('deberia mostrar el componente', () => {
        const wrapper = render.create(
            <ProductImage image={product2.image}/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
    test('Debe de mostrar el componente con la url de la imagen', () => {
        
        const wrapper = render.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })
})
