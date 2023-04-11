const React = require("react");
function Custom() {
  return (
    <div>
      <h1>Custom Order</h1>
      <form action="/menu/addToCart" method="POST">
        Drink <br />
        <select id="drink" name="drink">
          <option value="coffee">coffee</option>
          <option value="milk tea">milk tea</option>
          <option value="slushies">slushies</option>
          <option value="hot tea">hot tea</option>
        </select>
        <br />
        <br />
        Sweet
        <br />
        <select id="sweet" name="sweet">
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <br />
        <br />
        Milk
        <br />
        <select id="milk" name="milk">
          <option value="whole milk">whole milk</option>
          <option value="2% milk">2% milk</option>
          <option value="half milk">half milk</option>
          <option value="none">none</option>
        </select>
        <br />
        <br />
        Topping <br />
        <select id="topping" name="topping">
          <option value="bubble">bubble</option>
          <option value="Jelly">jelly</option>
          <option value="Pudding">pudding</option>
          <option value="Red Bean">red bean</option>
        </select>
        <br />
        <br />
        Price <br />
        <input type="text" name="price" value="$5.40" />
        <br />
        <br />
        <input type="submit" name="" value="Submit" />
      </form>
    </div>
  );
}
module.exports = Custom;
