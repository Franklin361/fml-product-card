import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle } from '../.';
import { ProductButtons } from '../src/components/ProductButtons';

const product = {
  id: '123',
  title: 'Producto 1',
  // image: '../image.jpg'
}

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4
          // maxCount: 10
        }}
      >
        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle/>
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
