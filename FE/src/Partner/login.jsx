import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className={classes.nen}>
      <div className={classes.form}>
        <form className={classes.loginform}>
          <input type="text" placeholder="username" value="luka3"/>
          <input type="password" placeholder="password" value="nhiga123"/>
          <button onClick={() => navigate("/admin/thongke")} >login</button>
          <p className={classes.message}>
            Not registered? <a href="/admin/register">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
