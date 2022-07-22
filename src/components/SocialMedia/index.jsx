import profilePic from '../../assets/profile-pic.jpg'
import './styles.css'

const SocialMedia = () => {
    return(
        <aside>
            <img src={profilePic} />
            <h1>Hiago Murilo</h1>
            <h2>Front-end Developer</h2>
            <div id="social">
                <a href="https://twitter.com/hiagomux" target="_blank">
                    <i class="fa fa-twitter"></i>
                    <span>@hiagomux</span>
                </a>
                <a href="https://github.com/hiagomu" target="_blank">
                    <i class="fa fa-github"></i>
                    <span>@hiagomu</span>
                </a>
                <a id="profile-link" href="https://codepen.io/hiagomu" target="_blank">
                    <i class="fa fa-codepen"></i>
                    <span>@hiagomu</span>
                </a>
            </div>
        </aside>
    )
}

export default SocialMedia