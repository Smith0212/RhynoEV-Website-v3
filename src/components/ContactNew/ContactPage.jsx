import React from 'react';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

function ContactPage() {
  return (
    <main className="pl-16 bg-black bg-opacity-70 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <ContactForm />
        <ContactHeader />
      </div>
    </main>
  );
}

export default ContactPage;