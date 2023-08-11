import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const ReCAPTCHAForm = props => {
  const recaptchaRef = React.useRef();

  const onSubmitWithReCAPTCHA = async () => {
    // const token = await recaptchaRef.current.executeAsync();
    // apply to form data
  };

  return (
    <form onSubmit={onSubmitWithReCAPTCHA}>
      <h1>Captcha</h1>
      <ReCAPTCHA
        ref={recaptchaRef}
        // size="invisible"
        sitekey="6LdEFJonAAAAAC5SAZ7li39XW8pLh6WNpCLOMUUU"
      />
    </form>
  );
};
