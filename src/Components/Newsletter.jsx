import { MailPlus } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-primary/5 rounded-box p-12 text-center border border-primary/10  font-newsreader">
      <h2 className="lg:text-4xl text-3xl font-extrabold mb-4">
        Curating the Absurd, Weekly.
      </h2>
      <p className="mb-8 max-w-2xl lg:text-xl text-lg mx-auto italic">
        Get the latest{" "}
        <span className="font-bold underline">revolutionary</span> inventions
        delivered straight to your inbox. No sense, guaranteed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <label className="input input-lg">
          <MailPlus className="h-[1em] opacity-50" />
          <input type="email" className="grow" placeholder="your-email@example.com" />
        </label>
        <button className="btn btn-secondary btn-lg font-bold ">
          Subscribe
        </button>
      </div>
    </section>
  );
}
