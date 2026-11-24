import Text from "../atoms/Text";

function Footer(){

    return(
        <footer className="footer">
            <Text variant="h3">Contacto</Text>
            <Text>Correo: contacto@biostore.com </Text>
            <div className="footer-redes">
                <a href="https://www.instagram.com/_levelnai/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://vt.tiktok.com/ZSgMgP8VU/" target="_blank" rel="noreferrer">Tiktok</a>
        </div>
        </footer>
    );
}
export default Footer;
