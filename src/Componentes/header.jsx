import Styles from './css/header.module.css'
function Header () {
    return(
        <header>
            <div className={Styles.name}> 
                <h2>Sem Medo de Ser</h2>
            </div>

            <nav>
                <p> <a href="#">Home</a></p>
                <p> <a href="#">Racismo</a></p>
                <p> <a href="#">Transfobia</a></p>
                <p> <a href="#">Misogonia</a></p>
                <p> <a href="#">Homofobia</a></p>
                <p> <a href="#">Como Agir</a></p>
            </nav>
        </header>

    )

}

export default Header