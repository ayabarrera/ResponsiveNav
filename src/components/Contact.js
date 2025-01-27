import React from "react";

function Contact () {
    return (
        <section>
          <h1>HELLO</h1>
          <p>
            if you have any questions 
          </p>
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Submit</button>
        </section>
    );
}

export default Contact;