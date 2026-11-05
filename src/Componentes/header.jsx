import Styles from './css/header.module.css'
function Header () {
    return(
        <header>
            <div className={Styles.name}> 
                <h2>Sem Medo de Ser</h2>
            </div>

            <nav>
                <p> <a href="/">Home</a></p>
                <p> <a href="/racismo">Racismo</a></p>
                <p> <a href="/transfobia">Transfobia</a></p>
                <p> <a href="/misoginia">Misogonia</a></p>
                <p> <a href="/homofobia">Homofobia</a></p>
                <p> <a href="/como-agir">Como Agir</a></p>
            </nav>
        </header>

    )

}

export default Header