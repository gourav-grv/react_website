import React from "react";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import './Css.css';

const Error = () => {
    return (
        <>
            <div class="div">
                <SentimentVeryDissatisfiedIcon class="sad" />
                <h1>404 Not Found</h1>
                <p class="para">A 404 error is a standard HTTP error message code that means the website 
                you were trying to reach couldn't be found on the server. It's a client-side error, 
                meaning either the webpage was removed or moved and the URL wasn't changed accordingly, 
                or the person just typed in the URL incorrectly.
                For the most part, you can configure your web server to create a customized 404 error page.</p>
            </div>
        </>
    )
}
export default Error;