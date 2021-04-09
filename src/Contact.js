import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_7u4l888', 'template_k9hf1i8', e.target, 'user_seeCm1suBqHAREJo6MzIm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section id="contact" className="section contact_container">
      <h1 className="section_heading">love what you see? let's work together.</h1>
      <div className="inner contact_inner">
        <form id="contact-form" onSubmit={sendEmail}>
          <h2>contact me</h2>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="name" /> 
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="email address" />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            placeholder="phone number xxx-xxx-xxxx" />
          <textarea 
            type="text" 
            id="message" 
            name="message" 
            cols="40" 
            rows="5" 
            placeholder="message me for job inquiries, more information, or whatever else" ></textarea>
          <input 
            type="submit" 
            id="submit" 
            name="submit" 
            value="submit"/>
        </form>
        <p className="attribution">*implemented with Email.js</p>
      </div>
    </section>
  );
}

export default Contact;