import * as React from 'react';

interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => (
  <div>
    <h1>Hi {name}!</h1>
    <p>Your reservation was successful we will get in touch soon.</p>
  </div>
);
