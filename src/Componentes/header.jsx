import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Styles from './css/header.module.css'

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/racismo', label: 'Racismo' },
    { to: '/transfobia', label: 'Transfobia' },
    { to: '/misoginia', label: 'Misoginia' },
    { to: '/homofobia', label: 'Homofobia' },
    { to: '/como-agir', label: 'Como Agir' },
]

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const progress = useRef(null)

    useEffect(() => {
        let frame = null
        const onScroll = () => {
            if (frame) return
            frame = requestAnimationFrame(() => {
                const y = window.scrollY
                const max = document.documentElement.scrollHeight - window.innerHeight
                setScrolled(y > 30)
                if (progress.current) {
                    progress.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
                }
                frame = null
            })
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (frame) cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <header className={scrolled ? Styles.scrolled : undefined}>
            <div className={Styles.name}>
                <Link to="/" className={Styles.logo}>
                    <h2>Sem Medo de Ser</h2>
                </Link>
            </div>

            <nav>
                {links.map(({ to, label, end }) => (
                    <p key={to}>
                        <NavLink
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                `${Styles.link} ${isActive ? Styles.active : ''}`
                            }
                        >
                            {label}
                        </NavLink>
                    </p>
                ))}
            </nav>

            <div className={Styles.progress} ref={progress} />
        </header>
    )
}

export default Header
