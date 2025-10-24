'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { FiClock as ClockIcon } from 'react-icons/fi';

import Button from '@/common/components/elements/Button';

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const formInitialState: FormDataProps = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataProps>(formInitialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'cddc6e9c-1557-4b53-a4ff-a12c7fc6d21a',
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        setFormData(formInitialState);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-grow flex-col gap-5'>
        <div className='flex flex-col gap-5 md:flex-row'>
          <input
            className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
            type='text'
            placeholder='Name*'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
            type='email'
            placeholder='Email*'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
          rows={5}
          placeholder='Message*'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          className={clsx(
            'flex justify-center bg-neutral-800 py-2.5 hover:scale-[101%] hover:bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-950 hover:dark:bg-neutral-50',
          )}
          type='submit'
          icon={<></>}
          data-umami-event='Send Contact Message'
          disabled={isLoading}
        >
          {isLoading ? 'Sending Message...' : 'Send Message'}
        </Button>
      </div>

      <div className='my-5 flex items-center gap-2 dark:text-neutral-400'>
        <ClockIcon />
        <div className='text-sm'>
          <span className='font-medium'>Avg. response:</span> 1-2 Hours (Working
          Hours, GMT+7)
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
