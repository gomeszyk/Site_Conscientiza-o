import Styles from './css/splittext.module.css'

// Anima o texto letra por letra (cada letra sobe e aparece em sequência).
// Uso: <SplitText as="h1" className={Styles.titulo} text="RACISMO" delay={200} />
export default function SplitText({
    text,
    as: Tag = 'span',
    className,
    delay = 0,      // atraso inicial (ms)
    stagger = 40,   // intervalo entre letras (ms)
}) {
    const words = text.split(' ')
    let index = 0

    return (
        <Tag className={className} aria-label={text}>
            {words.map((word, wi) => (
                <span key={wi}>
                    <span className={Styles.word} aria-hidden="true">
                        {[...word].map((char, ci) => (
                            <span
                                key={ci}
                                className={Styles.char}
                                style={{ animationDelay: `${delay + index++ * stagger}ms` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                    {wi < words.length - 1 && ' '}
                </span>
            ))}
        </Tag>
    )
}
