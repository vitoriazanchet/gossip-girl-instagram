import styles from './Footer.module.css';

export function Toast({ exibirBalao, fraseAtual }) {
    const frasesSequenciais = [
        "Achou mesmo que teria um link aí?",
        "Esse não é um botão.",
        "Esse também não!",
        "Você vai mesmo testar todos?",
        "Realmente você não desiste.",
        "Você já está merecendo um prêmio!",
        "Quem sabe no proximo?",
        "Seu prêmio é... calsaço hehe",
        "Isso é tudo pessoal!"
    ];

    return (
        <div className={`${styles.toast} ${exibirBalao ? styles.show : ''}`}>
            <p>{frasesSequenciais[fraseAtual]}</p>
        </div>
    );
}