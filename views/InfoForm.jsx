const React = require("react");
function InfoForm({ userInfo }) {
  console.log(userInfo);
  return (
    <div>
      <h1>Info Form</h1>
      <form action="/menu/addToCart/form" method="POST">
        Full Name: <input type="text" name="name" />
        <br />
        Phone: <input type="text" name="phone" />
        <br />
        <input type="submit" name="" value="Submit" />
      </form>
      <h3>{userInfo ? `${userInfo.name} order is preparing` : null} </h3>
    </div>
  );
}
module.exports = InfoForm;
