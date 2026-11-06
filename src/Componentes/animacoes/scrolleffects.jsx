import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Efeitos globais de rolagem:
// 1) volta pro topo ao trocar de página
// 2) faz as seções (e itens com data-reveal) aparecerem suavemente ao entrar na tela
export default function ScrollEffects() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname])

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const sections = [...document.querySelectorAll('main > section')].slice(1) // pula o hero
        const targets = []
        sections.forEach((section) => {
            const items = section.querySelectorAll('[data-reveal]')
            if (items.length) targets.push(...items)
            else targets.push(section)
        })

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target
                        el.classList.add('in-view')
                        observer.unobserve(el)
                        // limpa depois da animação para não brigar com o :hover dos elementos
                        const wait = 900 + Number(el.getAttribute('data-delay') || 0)
                        setTimeout(() => {
                            el.classList.remove('reveal', 'in-view')
                            el.style.transitionDelay = ''
                        }, wait)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        targets.forEach((el) => {
            el.classList.add('reveal')
            const delay = el.getAttribute('data-delay')
            if (delay) el.style.transitionDelay = `${delay}ms`
            observer.observe(el)
        })

        return () => observer.disconnect()
    }, [pathname])

    return null
}
