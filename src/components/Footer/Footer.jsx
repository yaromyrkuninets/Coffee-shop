import BlackHeader from "../UI/BlackHeader";
import Beans from "../UI/Beans";

import "../../styles/index.scss";

const Footer = () => {
    return (
        <>
            <BlackHeader/>
            <div className="footer-bottom">
                <Beans/>
            </div>
        </>
    )
}

export default Footer