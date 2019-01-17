import React from 'react';
import ReactDOM from 'react-dom';

function Greeting (){
    return <div>Hello from React</div>
}

ReactDOM.render(<Greeting />, document.getElementById("root"));