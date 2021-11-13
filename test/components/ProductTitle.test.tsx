import React from 'react';
import render from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';

import { product } from '../data/products';

describe('Product Title', () => {
    
    test('Debe de Mostrar el componente con el titulo Personalizado', () => {
        const wrapper = render.create(
            <ProductTitle title="Example Title" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test('Debe de mostrar el componente con el nombre del producto', () => {
        
        const wrapper = render.create(
            <ProductCard product={product}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })
    

})
