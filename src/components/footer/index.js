import './style.css'

const Footer = () => (
    <footer>
        <div className='centralizer'>
            <img src='assets/logo.png' />
            <div className='info'>
                <h2>Endereço</h2>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div className='info'>
                <h2>Contato</h2>
                <p>info@meusite.com</p>
                <p>Tel:(11) 3456-7890</p>
            </div>
            <div className='info'>
                <h2>Horários</h2>
                <p>Aberto todos os dias</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
        <div className='centralizer copyright'>
            <p>
                Gelateria. Orgulhosamente desenvolvido por Deusiel.
            </p>
        </div>
    </footer>
)

export default Footer