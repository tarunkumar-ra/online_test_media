import  React  from "react";

import  style  from "../Latest News/News.module.css";

import styled  from "styled-components";

const  News  = () => {

  return(
         <React.Fragment>
         <div className={ style.News } >
         <h3  className={ style.Heading1 } >Latest&nbsp;News.</h3>
         
         <div className={ style.container  }>
         <div className={ style.default } >
         <img src={ process.env.PUBLIC_URL+"images/default-cat.jpg" }  width="355px" height="300px"  alt="default-cat.jpg" />
         <div  className={ style.def_shadow }></div>
         <Titles>
         <United1>United States, Global</United1>
         <h4>Elsa Pataky And Luke Bracey</h4> 
         <h4>To Star In Matthew Reilly’s</h4>
         <h4>“Interceptor” For Netflix</h4>
         </Titles>
         </div>

         <Line></Line>

         <div  className={ style.Rebele } >
         <img src={ process.env.PUBLIC_URL+"images/default-cat.jpg"}   alt="default-cat.jpg"  width="355px" height="300px" />
         <div  className={ style.re_line_shadow }></div>
         <Titles2>
         <United2>Japan, Global</United2>
         <h4>NEW JAPANESE FILM MY</h4>    
         <h4>DEAREST, LIKE A CHERRY</h4>  
         <h4>BLOSSOM (WORKING</h4>  
         <h4>TITLE)</h4>    
         </Titles2>
         </div>
  
         <Line2></Line2>

         <div  className={ style.define_ult } >
         <img src={ process.env.PUBLIC_URL+"images/unnamed.jpg"}   alt="unnamed.jpg"  width="355px" height="300px" />
         <div  className={ style.def_line_shadow } ></div>
         <Titles3>
         <United3>Global</United3>
         <h4>Liza Soberano And Shay </h4>
         <h4>Mitchell Are Alexandra</h4>
         <h4>Trese</h4>
         </Titles3>
         </div>

         </div>
         </div>
         </React.Fragment>
        );
}  
export  default  News;

const  Titles  = styled.div`

       color:rgba(255, 255, 255, 0.9);
       margin-top: -244px;
       position: absolute;
       margin-left: 37px;
`; 

const  United1 = styled.p`

       font-size: 12px;
`;

const  Titles2 = styled.div`

       color: rgba(255, 255, 255, 0.9);
       margin-top: -282px;
       position: absolute;
       margin-left: 333px;  
       width: 300px;  
`;

const  United2 = styled.p`

       font-size: 12px;
`;

const  Titles3 = styled.div`

       color: rgba(255, 255, 255, 0.9);
       margin-top: -304px;
       position: absolute;
       margin-left: 763px;
       width: 300px;
`;

const  United3 = styled.p`

       font-size: 12px;
`;


const  Line = styled.div`

       border: 0px solid;
       background: rgba(255, 255, 255, 0.2);
       width: 1px;
       height: 370px;
       position: absolute;
       margin-top: -331px;
       margin-left: 242px;
`; 


const  Line2 = styled.div`

       border: 0px solid;
       background: rgba(255, 255, 255, 0.2);
       width: 1px;
       height: 370px;
       position: absolute;
       margin-top: -352px;
       margin-left: 674px
`; 