const React = require("react");

function ShowName({ menu, menuIdx }) {
  console.log(menu);
  return (
    <div>
      <h1>{menu.drink}</h1>
      <ul>
        {menu.name.map((ele, idx) => {
          return (
            <li>
              <a href={`/menu/${menuIdx}/${idx}/options`}>{ele}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = ShowName;
