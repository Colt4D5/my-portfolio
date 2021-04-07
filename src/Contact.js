// import { useState } from 'react';

const Contact = () => {
// const [name, setName] = useState(null);
// const [email, setEmail] = useState(null);
// const [phone, setPhone] = useState(null);
// const [message, setMessage] = useState(null);

  return (
    <section id="contact" className="contact_container">
      <h1 className="section_heading">love what you see? let's work together.</h1>
      <div className="inner contact_inner">
        <form action="">
          <h2>contact me</h2>
          <input type="email" id="name" name="name" placeholder="name"/><br/>
          <input type="text" id="email" name="email" placeholder="email address"/><br/>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="phone number (xxx-xxx-xxxx)"/><br/>
          <input type="text" id="message" name="message" placeholder="message me for job inquiries, more information, or whatever else"/><br/>
          <input type="submit" id="submit" name="submit"/>
        </form>
      </div>
    </section>
  );
}

export default Contact;