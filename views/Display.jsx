const React = require("react");

function Display({merchandises}){
    return(
        <div>
            <h2>Shopping</h2>
            <ul>
                {merchandises.map((item, idx)=>{
                    return(
                        <li key=
                        {idx}>
                            {item.Category}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

module.exports = Display;