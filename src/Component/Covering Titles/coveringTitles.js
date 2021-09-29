import  React , { useState } from  "react";

import  styled  from "styled-components";

import  style  from "../Covering Titles/coveringTitles.module.css";

import InsertCommentIcon from '@material-ui/icons/InsertComment';

import GroupWorkIcon from '@material-ui/icons/GroupWork';

const  CoveringTitles =  ()  => {

const  [ flim  , setFlim ] = useState(false);

const  [  series  , setSeries ]  =  useState(false);

const  [ documentary , setDocumentary ] = useState(false);

const [ kids , setKids ] = useState(false);

const [ interactive , setInteractive ] = useState(false);

const  [ reality , setReality ] = useState(false);

const [ stand , setStand ] = useState(false);

const  flimchange = () => {

       setFlim(!flim);
}

const  serieschange = () => {

       setSeries(!series);
}

const  documentarychange = () => {

       setDocumentary(!documentary);
}

const  kidschange = ()  => {

       setKids(!kids);
}

const  Interactivechange = () => {

       setInteractive(!interactive);
}

const  realitychange = () => {

       setReality(!reality);
}

const  standchange = () => {

       setStand(!stand);
}

      return (
              <React.Fragment>
              <CoverTitles>
              <Heading>I'm interested in covering titles releasing in</Heading>
              <nav  className={ style.searchbutton } >
              <ul>
              <li onMouseOver={ documentarychange } onMouseOut={ documentarychange } className={ documentary ? style.document : null }  ><GroupWorkIcon  style={{...{  fontSize:"15px" } }} />&nbsp;&nbsp;Film</li>
              <li onMouseOver={ serieschange } onMouseOut={ serieschange } className={ series ? style.ser : null } ><InsertCommentIcon  style={{...{  fontSize:"15px" } }} />&nbsp;&nbsp;Series</li>
              <li onMouseOver={ flimchange } onMouseOut={ flimchange } className={ flim ? style.flims : null } ><InsertCommentIcon  style={{...{  fontSize:"15px" } }} />&nbsp;&nbsp;Documentary</li>
              <li onMouseOver={ kidschange } onMouseOut={ kidschange }  className={ kids ? style.kidss : null } ><InsertCommentIcon  style={{...{  fontSize:"15px" } }} />&nbsp;&nbsp;Kids</li>
              <li onMouseOver={ Interactivechange } onMouseOut={ Interactivechange }  className={ interactive ? style.inter : null } ><InsertCommentIcon  style={{...{  fontSize:"15px" } }} />&nbsp;&nbsp;Interactive</li>
              <li onMouseOver={ realitychange } onMouseOut={ realitychange }  className={ reality ? style.realityes : null } ><InsertCommentIcon  style={{...{  fontSize:"15px" } }} />&nbsp;&nbsp;Reality</li>
              <li onMouseOver={ standchange } onMouseOut={ standchange }  className={ stand ? style.standsss : null } ><InsertCommentIcon  style={{...{  fontSize:"15px" } }} />&nbsp;&nbsp;Stand-Up Comedy</li>
              </ul>
              </nav>
              <div  className={style.line_shadow } ></div>
              <div  className={ style.images } >
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie1.jpg" } alt="movie1.jpg"  width="247px"  height="327px" /><div   className={ style.formula } >Add To Cart</div></div>
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie2.jpg" } alt="movie2.jpg"  width="247px"  height="327px"  /><div  className={ style.moxie   } >Add To Cart</div></div>
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie3.jpg" } alt="movie3.jpg"  width="247px"  height="327px"  /><div  className={ style.bombay  } >Add To Cart</div></div>
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie4.jpg" } alt="movie4.jpg"  width="247px"  height="327px"  /><div  className={ style.comedy } >Add To Cart</div></div>
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie5.jpg" } alt="movie5.jpg"  width="247px"  height="327px"  /><div  className={ style.marriage } >Add To Cart</div></div>
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie6.jpg" } alt="movie6.jpg"  width="247px"  height="327px"  /><div  className={ style.one } >Add To Cart</div></div>
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie7.jpg" } alt="movie7.jpg"  width="247px"  height="327px"  /><div  className={ style.one } >Add To Cart</div></div>
              <div style={{ ...{ paddingTop:"80px" , paddingRight:"60px" } } } ><img src={ process.env.PUBLIC_URL+"images/movie8.jpg" } alt="movie8.jpg"  width="247px"  height="327px"  /><div  className={ style.one }  >Add To Cart</div></div>
              </div>
              </CoverTitles>
              </React.Fragment>  
             );

}
export default  CoveringTitles;


const  CoverTitles  = styled.div`

       position: absolute;
       margin-top: 83px;
       background: rgb(22, 22, 22);
       width: 1349px;
       height: 1060px;

       @media screen and (max-width:1319px){

          height:1450px;
       }
       
       @media screen and (max-width:1012px){

          height:1850px;    
       }

       @media screen and (max-width:750px){

          height:2306px;    
       }

      @media  screen and (max-width:705px){

         height:3550px
      }

       color: rgba(255, 255, 255, 0.9);
       display: flex;
       max-width: -webkit-fill-available;
`;

const   Heading = styled.h2`

        font-size: 24px;
        margin-top: 23px;
        margin-left: 31px;
        display: flex;
        text-align: start;
        justify-items: flex-start;
`;