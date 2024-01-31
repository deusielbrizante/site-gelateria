import Header from '../../components/header'
import Footer from '../../components/footer'
import './style.css'

const Flavors = () => (
    <div>
        <Header/>
        <main>
            <section className='flavors-banner'>
                <div className='centralizer'>
                    <h1>Nossos Sabores</h1>
                </div>
            </section>
            <section className='centralizer flavors-flavors'>
                <h2>Sabores de Sorvete</h2>
                <ul>
                    <li>
                        <img src='assets/sabor-oreo.png'/>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </li>
                    <li>
                        <img src='assets/sabor-pistache.png'/>
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </li>
                    <li>
                        <img src='assets/sabor-cookies-avela.png'/>
                        <h3>Sorvete de Cookies e Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </li>
                    <li>
                        <img src='assets/sorbet-kiwi.png'/>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </li>
                    <li>
                        <img src='assets/sorbet-morango.png'/>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </li>
                    <li>
                        <img src='assets/sorbet-limao.png'/>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                    </li>
                </ul>
            </section>
        </main>
        <Footer/>
    </div>
)

export default Flavors