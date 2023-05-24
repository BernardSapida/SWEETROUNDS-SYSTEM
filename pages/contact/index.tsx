import ContactForm from "@/components/contact/Form";

export default function Contact() {
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center mb-4">
          <strong>Get in touch</strong>
        </h1>
        <p>
          Welcome to our contact page! We are here to answer any questions you
          may have about our products, services, or company. Whether you have a
          comment, concern, or just want to say hello, we are always happy to
          hear from you. To get in touch with us, please fill out the form below
          with your name, email address, and message. We will do our best to get
          back to you as soon as possible.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
