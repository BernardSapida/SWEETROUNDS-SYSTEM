import { useState, useEffect } from "react";

import Placeholder from "react-bootstrap/Placeholder";

import ContactForm from "@/components/contact/Form";

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => setLoading(false), []);

  return (
    <div className="mx-auto">
      <div className="mb-3">
        <h1 className={`text-center mb-4`}>
          {loading ? (
            <Placeholder animation="glow">
              <Placeholder
                xs={2}
                bg="dark"
                style={{
                  height: 20,
                  borderRadius: 5,
                }}
              />
            </Placeholder>
          ) : (
            <strong>Get in touch</strong>
          )}
        </h1>
        {loading ? (
          <Placeholder animation="glow">
            <Placeholder
              className="w-100"
              xs={2}
              bg="dark"
              style={{
                height: 20,
                borderRadius: 5,
              }}
            />
            <Placeholder
              className="w-100"
              xs={2}
              bg="dark"
              style={{
                height: 20,
                borderRadius: 5,
              }}
            />
            <Placeholder
              className="w-25"
              xs={2}
              bg="dark"
              style={{
                height: 20,
                borderRadius: 5,
              }}
            />
          </Placeholder>
        ) : (
          <p>
            Welcome to our contact page! We are here to answer any questions you
            may have about our products, services, or company. Whether you have
            a comment, concern, or just want to say hello, we are always happy
            to hear from you. To get in touch with us, please fill out the form
            below with your name, email address, and message. We will do our
            best to get back to you as soon as possible.
          </p>
        )}
      </div>
      <ContactForm pageLoading={loading} />
    </div>
  );
}
