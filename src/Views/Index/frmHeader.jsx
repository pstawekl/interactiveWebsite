import 'react-bootstrap';

function Header(){
    function padding(top,right,bottom,left){
        return{
            paddingTop: top,
            paddingRight: right,
            paddingBottom: bottom,
            paddingLeft: left
        }
    }
    return(
<div className="row" id='header'>
    <div className='col' id="logo"><a href="#"><img src="/img/newlogo.png" alt="logo" srcset="" style={{width: "30%"}}/></a></div>
    <div className='col' id="center"></div>
    <div className='col' id="menu">
        <nav className="me-auto" id='navBar'>
            <span><a href="#">h0m3</a></span>
            <span><a href="#Oferta">_0f3rta</a></span>
            <span><a href="#Portfolio">%p0rtf0li0%</a></span>
            <span><a href="#About">0_nas</a></span>
            <span><a href="#Kontakt">!k0nt@kt!</a></span>
        </nav>
    </div>
    <div className="row" id="banner">
        <div className="col" id='bannerImage'>
            <span id='bannerText'>Strony internetowe na zamówienie</span>
            <button id="btnCheck"><a href="#Oferta">Sprawdź</a></button>
        </div>
    </div>
</div>
    );
}

export default Header;