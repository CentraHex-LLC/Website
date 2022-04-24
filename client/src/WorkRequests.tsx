import React, { useState } from 'react';

const WorkRequests = () => {
  const [getFormStatus, setFormStatus] = useState(false);
  const toggleFormStatus = () => {
    setFormStatus(!getFormStatus);
  };
  return (
    <section id="requests" className="main special">
      <header className="major">
        <h2>Submit a Work Request</h2>
        <p>
					Have a problem we can help with? Need guidance on a technical problem?<br/>Reach out to us using our work request form.<br />
        </p>
      </header>
      <footer className="major">
        <ul className="actions special">
          <li><a onClick={toggleFormStatus} className="button primary">Work Request Form</a></li>
          {/*<li><a href="generic.html" className="button">Learn More</a></li>*/}
        </ul>
        {
          getFormStatus ?
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSceDT-2NRn1hJsWDI9eor2T6GfSv0a_Qvr8NJz3W3S_hoVG1g/viewform?embedded=true" width="640" height="1343" frameBorder="0">Loading…</iframe>
            : <div/>
        }
      </footer>
    </section>
  );
};

export default WorkRequests;