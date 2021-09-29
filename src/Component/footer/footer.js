import  React  from "react";

import  style from "./footer.module.css";

const  Footer = () => {

    return(
           <React.Fragment>
            <div  className={ style.footer }>
                
            <nav  className={ style.comp } >
            <ul>
            <li><h6 style={ { ...{ fontSize:"8px" } } } >Company</h6></li>
            <li>About Netflix</li>
            <li>Newsroom</li>
            <li>Company&nbsp;Assets</li>
            <li>Start Watching</li>
            </ul>
            </nav>

            <nav className={ style.conne }>
            <ul>
            <li><h6 style={ { ...{ fontSize:"8px" } } }  >Connect</h6></li>
            <li>Contact&nbsp;Us</li>
            <li></li>
            </ul>
            </nav>

            <nav  className={ style.lega } >
            <ul>
            <li><h6 style={ { ...{ fontSize:"8px" } } } >legal</h6></li>
            <li>Terms&nbsp;and&nbsp;Conditions</li>
            <li>Privacy</li>
            </ul>
            </nav>

            </div>
           </React.Fragment>
          );

}
export default  Footer;