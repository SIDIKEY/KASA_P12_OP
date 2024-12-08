import logo from "./../images/LOGO-2.svg";
import "./Footer.scss"


export default function Footer() {
	return (
		<footer className="footer_wrapper">
			<img className="logoFooter" src={logo} alt="logo kasa" />
			<p className="footer_policies">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}