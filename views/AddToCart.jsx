const React = require("react");

function AddToCart({ order }) {
  console.log(order);
  return (
    <div>
      <h1>Your Cart:</h1>
      {order.map((ele) => {
        return (
          <div>
            <h3>Order</h3>
            <ul>
              <li>{ele.drink}</li>
              <li>{ele.price}</li>
            </ul>
          </div>
        );
      })}

      <button>
        <a href="/menu/addToCart/form">Buy</a>
      </button>
    </div>
  );
}

module.exports = AddToCart;
