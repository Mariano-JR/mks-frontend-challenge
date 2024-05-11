import { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CartProvider, CartContext } from './CartContext';

describe('CartContext', () => {
  const TestComponent = () => {
    const { addToCart, removeFromCart, updateQuantity, totalItems, cartItems } =
      useContext(CartContext)!;

    return (
      <div>
        <button onClick={() => addToCart({ item: { id: 1, name: 'Product 1', price: '10', photo: '', description: '', brand: '', createdAt: new Date(), updatedAt: new Date() }, count: 1 })}>
          Add Product
        </button>
        <button onClick={() => removeFromCart(1)}>Remove Product</button>
        <button onClick={() => updateQuantity(1)}>Update Quantity</button>
        <div data-testid="total-items">Total Items: {totalItems()}</div>
        <div data-testid="cart-items">Cart Items: {JSON.stringify(cartItems)}</div>
      </div>
    );
  };

  const Wrapper = ({ children }: any) => (
    <CartProvider>{children}</CartProvider>
  );

  test('Cart is empty', () => {
    const { getByText } = render(
      <Wrapper>
        <CartContext.Consumer>
          {(cart) => (
            <div>
              {cart ? (cart.totalItems() === 0 ? 'Cart is empty' : "Cart is not empty'") : 'Cart dont exist'}
            </div>
          )}
        </CartContext.Consumer>
      </Wrapper>
    );

    expect(getByText('Cart is empty'));
  });

  test('addToCart adds a new item to the cart', () => {
    const { getByText, getByTestId } = render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );

    fireEvent.click(getByText('Add Product'));

    const cartItems = getByTestId('cart-items');
    expect(cartItems.textContent).toContain('Product 1');
    expect(cartItems.textContent).toContain('1');
  });

  test('removeFromCart removes an item from the cart', () => {
    const { getByText, getByTestId } = render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );

    fireEvent.click(getByText('Add Product'));
    fireEvent.click(getByText('Remove Product'));

    const emptyCart = getByTestId('cart-items');
    expect(emptyCart.textContent).toContain('[]');
  });

  test('updateQuantity updates the quantity of an item in the cart', () => {
    const { getByText, getByTestId } = render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );

    fireEvent.click(getByText('Add Product'));
    fireEvent.click(getByText('Update Quantity'));

    const updatedCartItems = getByTestId('cart-items');
    expect(updatedCartItems.textContent).toContain('0');
  });
});
