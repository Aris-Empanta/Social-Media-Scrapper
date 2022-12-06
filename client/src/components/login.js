import "../css/login.css";
import axios from "axios";
import { sendCredentials } from "../functions/login";

export const Login = () => {

    return(<div className="loginComponent">
              <div id="loginElements"> 
                <input type="text"/>
                <button onClick={ () => sendCredentials(axios) }>submit</button>
              </div> 
           </div>)
}