import classes from "./register.module.css";


const Register = () => {
    

  return (
    <div className={classes.nen}>
      <div className={classes.form}>
        <form className={classes.registerform}>
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password"  />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p className={classes.message}>
            Already registered? <a href="/admin">Sign In</a>
          </p>
        </form>
         
      </div>
    </div>
  );
};

export default Register;
