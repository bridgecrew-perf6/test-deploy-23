import classes from "./Menutop.module.css"

const Menutop = () => {
    return(
        <div className={classes.menu}>
        <div className={classes.search}>
          {/* <form>
            <div className={classes.search_field}>
              <input></input>
              <button type="submit">
                <img src="https://demo.dashboardpack.com/user-management-html/img/icon/icon_search.svg" />
              </button>
            </div>
          </form> */}
        </div>
        <div className={classes.notification}>
          <div className={classes.mess}>
            <a>
              <img src="https://demo.dashboardpack.com/user-management-html/img/icon/bell.svg" />
            </a>
            <a>
              <img src="https://demo.dashboardpack.com/user-management-html/img/icon/msg.svg" />
            </a>
          </div>
          <div className={classes.frofile}>
              <img src="https://demo.dashboardpack.com/user-management-html/img/client_img.png"/>
          </div>
        </div>
      </div>
    )
}

export default Menutop