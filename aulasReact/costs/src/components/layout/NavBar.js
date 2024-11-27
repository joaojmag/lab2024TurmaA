import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./NavBar.module.css"
import logo from "../../img/youx_group_logo.jpeg"

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Container>
                <img src={logo} alt="Costs" width={50} />
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Company</Link>
                    </li>


                    <li className={styles.item}>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </Container>
        </nav>
    )
}

export default NavBar