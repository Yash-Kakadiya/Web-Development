import React from 'react';

export default function LogIn() {
    return (
        // <div className="Login">
        //     <form>
        //         <h2><u>Login form</u></h2>
        //         <input type="text" size="30" placeholder="Username" id="inp"></input>
        //         <input type="password" size="30" placeholder="Password"></input>
        //         <button type="submit">Submit</button>
        //         <br />
        //         <Demo count='10' />
        //     </form>
        // </div>
        <div className='Login w-50 mx-auto'>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name='email' />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name='password'/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="terms" name='terms'/>
                    <label class="form-check-label" for="terms">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

function Demo(props) {
    let str = "";
    for (let i = 0; i < props.count; i++) {
        str += "¥";
    }
    return (<h1>{str}</h1>);
}