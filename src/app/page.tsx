import Link from "next/link";
import { ContactForm, List, PageHeading, Sale } from "./components";

export default function Home() {
  return (
    <article className='grid grid-cols-1 gap-y-6'>
      <section className='lg:w-full'>
        <PageHeading heading='Лучший таксопарк' />
      </section>
      <section>
        <Sale sale={true} price={1300} />
      </section>
      <section className="space-y-3">
        <h2 className="p-3 text-center font-bold text-xl lg:text-4xl text-taxi tracking-wide bg-dark-chocolate rounded-xl shadow">Аренда авто для работы в такси</h2>
        <p className="text-lg lg:text-xl leading-relaxed">Аренда автомобилей для работы в такси от компании Такси Шоколад - одна из самых выгодных. Наша компания одна из самых крупных фирм по аренде автомобилей для такси в Москве. Таксопарк предоставляет гибкие и удобные условия аренды авто.</p>
        <p className="text-lg lg:text-xl leading-relaxed">Более 10 лет на рынке такси - наша компания зарекомендовала себя как надёжный таксопарк, с хорошей репутацией, как среди таксистов, так и среди жителей Москвы, благодаря надежным автомобилям и выгодным условиям аренды.</p>
        <p className="text-lg lg:text-xl leading-relaxed">Коллектив таксопарка «Шоколад» трудится для жителей и гостей города Москва и водителей такси!</p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <List title="Лидер рынка" list={['Более 10 лет на рынке', '1800 машин в парке', 'Официальный партнер «Яндекс Go Такси»']} />
        <List title="Услуги автопарка" list={['Аренда авто', 'Аренда с выкупом авто', 'Помощь с подключением', 'Обучение работе в такси']} />
      </section>
      <section className='flex justify-center items-center'>
        <ContactForm />
      </section>
    </article>
  );
}
