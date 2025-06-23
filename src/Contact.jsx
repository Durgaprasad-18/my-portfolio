

const Contact=()=>{
    return(

        <section id="contact" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Contact Me</h2>
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <form action="https://formspree.io/f/xzzggnlq" method="POST">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea name="message" rows="5" className="form-control" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;