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
        sitekey="6LfzBZonAAAAALtYmI0D0lr7rIb3dJuyYKZVBfO6"
      />
    </form>
  );
};
