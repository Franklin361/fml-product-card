
import React from 'react';
import render from 'react-test-renderer';
import {  ProductCard } from '../../src/components';

import { product } from '../data/products';

const { act } = render;

describe('Product Card', () => {
    

    test('Debe de mostrar el componente correctamente', () => {
        
        const wrapper = render.create(
            <ProductCard product={product}>
                {
                    () => (
                        <h1>Hellow World</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })


    test('Debe incrementar el contador', () => {
        const wrapper = render.create(
            <ProductCard product={product}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Cart</h1>
                            <span>{count}</span>
                            <button onClick={()=> increaseBy(+1)}>Increment</button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(()=>{
            (tree as any).children[2].props.onClick()
        })

        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');
    })
    
    

})
