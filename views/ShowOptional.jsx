const React = require("react");

function ShowOptional({ drink, id }) {
  console.log(drink, id);
  return (
    <form action="/menu/addToCart" method="POST">
      Name:
      <input name="drink" value={drink.name[id]} /> <br />
      Sweet:
      <input name="sweet" value={drink.sweet} /> <br />
      Milk:
      <input name="milk" value={drink.milk} />
      <br />
      Topping:
      <input name="topping" value={drink.topping} />
      <br />
      Price:
      <input name="price" value={drink.price} />
      <br />
      <input
        name="isCaffein"
        value={drink.isCaffein ? "Have Caffein" : "None Caffein"}
      />
      <br />
      <button type="submit" name="" value="Submit">
        Add To Cart
      </button>
    </form>
  );
}

module.exports = ShowOptional;
