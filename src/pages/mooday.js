import React from "react";

const Mooday = () => {

    return(
        <div>
            <h1>Where the magic happens</h1>
            <button onClick={() => window.location.href='/register'}>Registration</button>
            <button onClick={() => window.location.href='/login'}>Login</button>

        </div>
    )

}

export default Mooday