import React from "react";

function Owner(props) {
  return (
    <>
      <form className="form-group">
        <fieldset>
          <legend>
            <h3 className="white">{props.index === 0 ? "Your personal information" : `Guest ${props.index} information`}</h3>
          </legend>
          <div className="field-group">
            <div className="field">
              <label htmlFor={`full_name_ticketholder_${props.index}`} className="turquoise">
                <h4>Full name</h4>
              </label>
              <input type="text" name="name" id={`full_name_ticketholder_${props.index}`} placeholder="Insert your full name" minLength="2" required className="input-text" />
              <span className="error-message">Enter a valid name</span>
            </div>
            <div className="field">
              <label htmlFor={`email_ticketholder_${props.index}`} className="turquoise">
                <h4>Email</h4>
              </label>
              <input type="email" name="email" id={`email_ticketholder_${props.index}`} placeholder="Email address" required className="input-text" />
              <span className="error-message">Enter a valid email</span>
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor={`dob_ticketholder_${props.index}`} className="turquoise">
                <h4>Date of birth</h4>
              </label>
              <input type="date" name="dob" id={`dob_ticketholder_${props.index}`} placeholder="Date of birth (DD/MM/YY)" max="2004-12-01" required className="input-text" />
              <span className="error-message">Enter a valid date</span>
            </div>
            <div className="field">
              <label htmlFor={`id_ticketholder_${props.index}`} className="turquoise">
                <h4>ID number</h4>
              </label>
              <input type="text" name="identification" id={`id_ticketholder_${props.index}`} placeholder="123456AB" required className="input-text" />
              <span className="error-message">Enter a valid ID</span>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default Owner;
