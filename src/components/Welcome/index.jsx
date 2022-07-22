import tulip from '../../assets/tulip.png'
import './styles.css'

const Welcome = () => {
    return (
        <section id="welcome-section">
            <div id="welcome">
                <img src={tulip} id="img-welcome" alt="" />
                <h1>Welcome to my Portifolio</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non sapien id sapien venenatis elementum. Ut mattis, est et gravida egestas, mauris sapien sollicitudin massa, id varius urna urna eget felis.</p>
            </div>
        </section>
    )
}

export default Welcome