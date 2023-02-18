import { LogoGif } from "../../assets/images/index";
import './Loading.scss'

function LoadingScreen() {
    return (
        <>
            <div className="loading__bg">
                <img src={LogoGif} alt="" />
            </div>
        </>
    );
}

export default LoadingScreen;
