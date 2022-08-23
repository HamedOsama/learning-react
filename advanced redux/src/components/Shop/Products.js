import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My First Book', description: 'The first book I  Ever Wrote' },
  { id: 'p5', price: 5, title: 'My Second Book', description: 'My second book' },
]
const Products = (props) => {
  const products = DUMMY_PRODUCTS.map(product => {
    return <ProductItem
      title={product.title}
      price={product.price}
      description={product.description}
      key={product.id}
      id={product.id}

    />
  })
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products}
        {/* <ProductItem */}
        {/* title='Test' */}
        {/* price={6} */}
        {/* description='This is a first product - amazing!' */}
        {/* /> */}
      </ul>
    </section>
  );
};

export default Products;
