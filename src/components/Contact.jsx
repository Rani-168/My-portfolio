function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get("subject") || "Portfolio enquiry";
    const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`;
    window.location.href = `mailto:ranibhosale168@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="section contact-section reveal">
      <div className="section-heading">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p>Have a project in mind or want to work together? Feel free to reach out to me.</p>
          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:ranibhosale168@gmail.com">ranibhosale168@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone</strong>
            <span>+91 7709829002</span>
          </div>
          <div className="contact-item">
            <strong>Location</strong>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" rows="5" name="message" required></textarea>
          <button className="primary-btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
