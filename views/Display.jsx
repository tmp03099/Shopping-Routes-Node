const React = require("react");

function Display({ menus }) {
  return (
    <div>
      <h2>MENU</h2>
      <ul>
        {menus.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={`/menu/${idx}`}>{item.drink}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Display;
