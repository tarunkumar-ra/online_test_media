import  React , { useState }  from "react";

import  style  from  "../Company Assets/Componey_assets.module.css"; 

const  Companyassets =  () =>  {

const  [ aboutscolor , setAboutscolor ] = useState(false);

const  handleChange = () => {

        setAboutscolor(!aboutscolor);
}

     return (
             <React.Fragment>
             <div className={ style.container } >
             <img src={ process.env.PUBLIC_URL+"image/company_assets_bg.png" }  alt="company_assets_bg.png" />
             <div  className={ style.shadow } ></div>
             <div  className={ style.heading } >
             <h3>Looking&nbsp;for&nbsp;company&nbsp;assets?</h3>
             <h6   className={ style.site_line } >Get&nbsp;more&nbsp;images&nbsp;and&nbsp;information&nbsp;about&nbsp;Netflix on our company site.</h6>
             <div  className={  aboutscolor ?  style.about2 : style.about  } onMouseOut={ handleChange } onMouseOver={ handleChange }  >Go to About Netflix</div>
             </div>
             </div>
             </React.Fragment>
            );
}
export default  Companyassets;