import {socialImgs, navLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container-new">
                {/* Sol Taraf - Logo ve Açıklama */}
                <div className="footer-left">
                    <a href="#hero" className="footer-logo">
                        Berkay HANÇER
                    </a>
                    <p className="footer-description">
                        Constantly evolving as a developer, I craft modern applications and deliver innovative solutions
                        that blend creativity with cutting-edge technology.
                    </p>
                    <div className="footer-socials">
                        {socialImgs.map((img) => (
                            <a className="footer-social-icon" target="_blank" rel="noopener noreferrer" href={img.url} key={img.url}>
                                <img src={img.imgPath} alt="social" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sağ Taraf - Quick Links */}
                <div className="footer-right">
                    <h3 className="footer-quick-links-title">Quick Links</h3>
                    <nav className="footer-nav">
                        <ul className="footer-links-list">
                            {navLinks.map(({ link, name}) => (
                                <li key={name}>
                                    <a href={link} className="footer-link">
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Alt Kısım - Copyright */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Berkay Hançer. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer
