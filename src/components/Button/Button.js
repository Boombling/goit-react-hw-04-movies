import React, { Component } from "react";
import { withRouter } from "react-router";
import routes from "../../routes";
import styles from "./Button.module.css"

class Button extends Component {
    onBackBtn = () => {
        const { location, history } = this.props;
        history.push(location?.state?.from || routes.home)
        // if (location.state && location.state.from) {
        //     return history.push(location.state.from)
        // }
        // history.push(routes.home)
    }

    render() {
        return(
            <button className={styles.ButtonBack} type="button"onClick={this.onBackBtn}>Back</button>
        )
    }
}

export default withRouter(Button)