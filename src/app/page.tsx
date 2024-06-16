import { ContactForm, Sale } from "./components";

export default function Home() {
  return (
    <article>
      <section>
        <Sale sale={true} price={1300} />
      </section>
      <section className='flex justify-center items-center mt-6 lg:mt-12'>
        <ContactForm />
      </section>
    </article>
  );
}
