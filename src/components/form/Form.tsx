import axios from 'axios';
import { useState } from 'react';
import { FormInput } from '~/components/form/FormInput';
import { generateEmail, generateHexId } from '~/lib/data';

export const Form = () => {
  const [firstName, setFirstName] = useState<string>(`Jason`);
  const [lastName, setLastName] = useState<string>(`Rushton`);
  const [orgName, setOrgName] = useState<string>(
    `Test Org ${generateHexId(8)}`
  );
  const [email, setEmail] = useState<string>(generateEmail());
  const [phone, setPhone] = useState<string>(`4355551234`);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [accountDetails, setAccountDetails] = useState<any>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      firstName,
      lastName,
      orgName,
      email,
      phone,
    };

    return axios
      .request({
        url: '/api/create-account',
        method: 'POST',
        data,
      })
      .then(({ data }) => {
        setAccountDetails(data);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form className="prose dark:prose-invert  prose-slate">
      <fieldset className="flex flex-col gap-4">
        <FormInput
          id="first-name"
          label="First Name"
          autoComplete="given-name"
          value={firstName}
          onChange={setFirstName}
        />
        <FormInput
          id="last-name"
          label="Last Name"
          autoComplete="family-name"
          value={lastName}
          onChange={setLastName}
        />
        <FormInput
          id="organization-name"
          label="Organization Name"
          autoComplete="organization"
          value={orgName}
          onChange={setOrgName}
        />
        <FormInput
          id="email"
          label="Email Address"
          autoComplete="email"
          inputType="email"
          value={email}
          onChange={setEmail}
        />
        <FormInput
          id="phone"
          label="Telephone"
          autoComplete="tel"
          inputType="tel"
          value={phone}
          onChange={setPhone}
        />
        <div className="flex flex-col justify-end pt-2">
          <SubmitButton onClick={onSubmit} disabled={isSubmitting} />
        </div>
      </fieldset>
      {accountDetails ? (
        <pre>{JSON.stringify(accountDetails, null, 2)}</pre>
      ) : null}
    </form>
  );
};

const SubmitButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      {...props}
      className="bg-busybusy-300 p-2 px-6 rounded-full text-busybusy-100 disabled:bg-gray-300 disabled:text-gray-500"
    >
      Create Account
    </button>
  );
};
