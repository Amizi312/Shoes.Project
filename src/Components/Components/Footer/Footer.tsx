import "./Footer.css";

function Footer(): JSX.Element {
    const date = new Date()
    const current = `${date.getFullYear()}`
    return (
        <div className="Footer">
            <p>This site was build by AmITech | {current}</p>
        </div>
    );
}

export default Footer;
