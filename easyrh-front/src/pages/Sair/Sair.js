import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';

const Sair = (props) => {

  useEffect(() => {
    localStorage.clear()
    props.history.push({
      pathname: "/",
      state: {},
    });
    toast.success("Você saiu!", {
      autoClose: 3000,
      position: "top-right"
    })
  }, [])

  return (
    <div></div>
  )
};

export default withRouter(Sair);
