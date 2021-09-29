import  React , { useState } from "react";

import SearchIcon from '@material-ui/icons/Search';

import MenuIcon from '@material-ui/icons/Menu';

import CloseIcon from '@material-ui/icons/Close';

import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';

import LaunchSharpIcon from '@material-ui/icons/LaunchSharp';

import  News  from "./Latest News/News";

import  Footer  from "../footer/footer";

import  Companyassets  from "../Company Assets/Componey_assets";

import  CoveringTitles  from "../Covering Titles/coveringTitles";

import  style  from "../Css/Navbar.module.css";

const  Navbar = ()  =>  {

const [ search , setSearch ] = useState(false);

const  [ english , setEnglish ]   = useState(false);

const  [ india , setIndia ] = useState(false);

const  [ Resoures , setResoures ] = useState(false);

const [ newsrooms , setNewsrooms ] = useState(false);

const [ apply , setApply ] = useState(false);

const [ menusearch , setMenusearch ] = useState(false);

const [ opensearch , setOpensearch ] = useState(false);

const [  cross , setCross ] = useState(false);

const [ menubar , setMenubar ] = useState(false);

const [ com , setCom ] = useState(false);

const [ mobsearch , setMobsearch ] = useState(false); 

const  searchChange = () => {

       setSearch(true);
}

const  searchChange2 = () => {

       setSearch(false);
}

const  EnglishChange = () => {

       setEnglish(!english);
}

const  IndiaChange = () => {

       setIndia(!india);
}

const ResouresChange = () => {

       setResoures(!Resoures);

}

const Newsroomschange = () => {

       setNewsrooms(!newsrooms);
}

const ApplyChange = () => {

       setApply(!apply);
}

const  MenusearchChange = () => {

       setMenusearch(!menusearch);
}

const  opensearchchange =  () => {

       setOpensearch(true);
}

const  closedsearchange = () => {

       setOpensearch(false);
}

const  Hoverchange = () => {

       setCross(!cross);
}

const  Menubarchange =  () => {

       setMenubar(true);
}

const CrossIconssschange = () => {

       setMenubar(false);
}

const  Comchange = () => {

       setCom(!com);
}

const  mobsearchchange = () => {

       setMobsearch(!mobsearch);
}

     return(
            <React.Fragment>
            <div className={ style.container } >
            <nav className={ style.desk } >
            <div className={ style.logo } >
            <img src={ process.env.PUBLIC_URL+"image/Netflix-Logo.wine.png" } className={ style.images } alt="Netflix-Logo.wine.png" />
            <h1 className={ style.media } >Media Center</h1>
            </div>
            <ul>
            <li onMouseOver={ EnglishChange }  onMouseOut={ EnglishChange }   className={ english ?  style.list : null  } >English<ArrowDropDownSharpIcon  style={{ ...{ position:"absolute" , fontSize:"20px" }  }} /></li>
            <li onMouseOver={ IndiaChange } onMouseOut={ IndiaChange }  className={ india ? style.list : null  } onClick={ opensearchchange }  >In&nbsp;India<ArrowDropDownSharpIcon  style={{ ...{ position:"absolute" , fontSize:"20px" }  }} /></li>
            <div className={ opensearch ? style.openbar : style.closedbar } >
            <h3 className={  style.searchheading } >What country do you cover?</h3>
            <CloseIcon  className={ cross ? style.crossIcons : null }   onMouseOver={ Hoverchange } onMouseOut={ Hoverchange }  onClick={ closedsearchange } style={ { ...{  color: "white" ,  position: "absolute" ,  marginLeft: "1316px" , fontSize:"27px" , marginTop:"152px" , cursor: "pointer" }  } } />
            <img src={ process.env.PUBLIC_URL+"image/country-select-background.svg" } style={{ ...{ marginLeft:"832px" , height:"200px"  , marginTop:"208px" } }} />
            </div>

            <li className={ newsrooms ? style.newsrooms : null  } onMouseOver={ Newsroomschange } onMouseOut={ Newsroomschange } >Newsroom<LaunchSharpIcon  style={{ ...{ marginTop:"-40px" , marginLeft:"70px" ,  fontSize:"17px" } } } /></li>
            <li className={ Resoures ?  style.Resoures : null } onMouseOver={ ResouresChange } onMouseOut={ ResouresChange }  >Resoures<ArrowDropDownSharpIcon  style={{ ...{ position:"absolute" , fontSize:"20px" }  }} /></li>
            <li className={ apply ? style.apply : null } onMouseOver={ ApplyChange } onMouseOut={ ApplyChange } style={{ ...{ border: "1px solid rgba(255, 255, 255, 0.4)" , borderRadius:"3px" } } }>Apply</li>
            <li  className={ style.presslogin } >Add&nbsp;To&nbsp;Cart</li>
            <li><div className={ style.searc } ><input type="text" className={ menusearch ? style.search : style.search2 }  placeholder="Search" /><SearchIcon  onClick={ MenusearchChange }  style={ { ...{ position:"absolute" , marginLeft:"-71px" ,  marginTop:"-2px" , fontSize:"30px" , cursor:"pointer" } } } /></div></li>
            </ul>
          
            </nav>

            <nav className={style.mobi}>
            <ul>
            <li>
            <div>
            <SearchIcon   onClick={ mobsearchchange }  style={ { ...{ fontSize:"26px" } } }  className={ style.seaIcons } />
            <input  className={ mobsearch ? style.searchings : style.searchings2 }  type="text"  placeholder="Search" defaultValue="" />
            </div>
            </li>
            <li><h3 style={ { ...{ display:"flex" , justifyContent:"center" } } } ><img src={ process.env.PUBLIC_URL+"image/Netflix-Logo.wine.png"} className={ style.imaging }  alt="Netflix-Logo.wine.png" /></h3><h3 className={ style.med_center }>Media Center</h3></li>
            <li><h3 style={ { ...{ display:"flex" , justifyContent:"flex-end" } } } ><MenuIcon  onClick={ Menubarchange }  className={ style.menu } /></h3></li>
            <div className={ menubar ?  style.menus_bars : style.menus_bars_closed }><img src={ process.env.PUBLIC_URL+"image/Netflix-Logo.wine.png" }  className={ style.menus_images }  alt="Netflix-Logo.wine.png"  /><h3 style={ {...{ color:"white" , fontSize:"15px" , marginLeft:"144px" , marginTop: "28px" } } }>Media Center<CloseIcon onClick={ CrossIconssschange } style={ { ...{ marginLeft:"55px" , color:"white" , cursor:"pointer" } } }  /></h3>
            <li  className={ style.english } >English</li>
            <li  className={ style.india } >In India</li>
            <li  className={ style.home } >Home</li>
            <li  className={ style.news }>Newsrooms</li>
            <li onClick={ Comchange } className={ style.res } >Resoures</li>
            <div className={ com ? style.ass2 : style.ass } ><li  style={ { ...{ display:"block" , marginTop:"5px" } } }>Company Assets<LaunchSharpIcon  style={{ ...{ marginLeft:"90px" } } } /></li><li  style={ { ...{ display:"block" , marginTop:"22px" } } } >About Netflix<LaunchSharpIcon  style={ { ...{ marginLeft:"113px" } } } /></li>
            </div>
            <li className={ style.log } >Press Log In</li>
            <li className={ style.applying } >Apply</li>
            </div>
            </ul>
            </nav>
            <div className={style.contain } ><img src={ process.env.PUBLIC_URL+"image/streams-bg.png" }  className={ style.image } /></div>
            <div className={ style.Title } ><h1 style={ { ...{ fontWeight:"700" } } }  className={ style.discovery }  >Discover stories to share <br/><h1  className={ style.discovery2 }   style={ { ...{ marginLeft:"127px" , fontWeight:"700" } } }>with India.</h1></h1></div>
            
            <div className={ style.searchdiv }>
            <form>
            <input type="text" className={ search ?  style.searchbar2 : style.searchbar } onFocus={ searchChange } onBlur={ searchChange2 }  placeholder="Search for Netflix titles and news" />
            <SearchIcon className={ style.icons }/>
            </form>
            </div>
            </div>
            <CoveringTitles/>
            <News/>
            <Companyassets/>
            <Footer/>
            </React.Fragment>
           );

}
export default Navbar;