# FML-Product-Card
Este es un paquete de pruebas de despliegue en NPM

-Franklin Martinez Lucas-

## Ejemplo

```
import { ProductCard,  ProductImage, ProductTitle, ProductButtons } 'fml-product-card'
```


```
<ProductCard
    product={product}
    initialValues={{
        count: 4
        // maxCount: 10
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy }: ProductCardHandlers) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </>
        )
    }
</ProductCard>
```