import Portal from '../assets/img/portal.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function Header(){
    return(
        <>
            <div className="position-relative p-0 header-content" id='worl'>
                <div className="py-5 hero-header ">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                    <h1 className="display-3 animated slideInLeft">Rick and Morty<br/></h1>
                                    <p className="text-white animated slideInLeft mb-4 pb-2">Obten información de diferentes personajes a lo largo de la serie.</p>
                                    <div className="btn btn-success text-white py-sm-3 px-sm-5 me-3 animated slideInLeft" onClick={animationImage}>Comenzar</div>
                                    <Link to='/characters'><div id="newpage"></div></Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                    <img className="img-fluid portal" src={ Portal } alt="" id='img-rotate'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function animationImage(){

    setTimeout(() => {
        $("#img-rotate").css("animation", "imgRotate 1s linear infinite");
    }, 1000)
    
    setTimeout(() => {
        $("#img-rotate").css("animation", "imgRotate 0.6s linear infinite");
    }, 2500)
 
    setTimeout(() => {
        $("#img-rotate").css("animation", "imgRotate 0.1s linear infinite");
    }, 4500)
    
    setTimeout(() => {
        $("#newpage").trigger("click");
    }, 5500)
};