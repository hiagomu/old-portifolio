import './styles.css'

const Contact = () => {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <form>
                <div id="block-1">
                    <label for="name">Name</label>
                    <input type="text" name="text" id="text" autocomplete="off" placeholder="Name" required />
                </div>
                <div id="block-2">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" autocomplete="off" placeholder="Email" required />
                </div>
                <div id="block-3">
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" id="subject" autocomplete="off" placeholder="Subject matter" required />
                </div>
                <div id="block-4">
                    <label for="message">Message</label>
                    <textarea max-length="240" placeholder="Write" id="message"></textarea>
                </div>
                <div id="block-5">
                    <button type="submit" name="submit" value="1">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact