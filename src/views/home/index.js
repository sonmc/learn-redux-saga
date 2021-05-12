import React from "react";
import { ROUTER_NAME } from "../../routers/typeRouter";
import { useHistory } from 'react-router-dom'
export default function Home() { 
  const history = useHistory();
  const _goLoginPage = () => {
     history.push(ROUTER_NAME.LOGIN_PAGE);
  };

  return (
    <React.Fragment>
      <button onClick={_goLoginPage}>
        Go login Home
      </button>
    </React.Fragment>
  ); 
}
