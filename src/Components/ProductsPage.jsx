import { Eye, Star } from "lucide-react";
import { Confirm, Notify } from "notiflix";
import { Link, useLoaderData } from "react-router";
import {
  addUnwantedIdea,
  addWantedIdea,
  isIdeaUnwanted,
  isIdeaWanted,
} from "./../utils/localstorage";

export default function ProductsPage() {
  const p = useLoaderData();

  const handleWantThis = (id) => {
    if (isIdeaWanted(id)) {
      Notify.info("This product is already in your wanted list.", {
        timeout: 5000,
        showOnlyTheLastOne: true,
      });
      return;
    }

    if (isIdeaUnwanted(id)) {
      Notify.warning("This product is in your unwanted list.", {
        timeout: 5000,
        showOnlyTheLastOne: true,
      });
      return;
    }

    addWantedIdea(id);
    Notify.success("Thank you for your interest!", {
      timeout: 5000,
      showOnlyTheLastOne: true,
    });
  };

  const handleDontWantThis = (id) => {
    if (isIdeaUnwanted(id)) {
      Notify.info("This product is already in your unwanted list.", {
        timeout: 5000,
        showOnlyTheLastOne: true,
      });
      return;
    }

    if (isIdeaWanted(id)) {
      Notify.warning("This product is in your wanted list.", {
        timeout: 5000,
        showOnlyTheLastOne: true,
      });
      return;
    }

    Confirm.show(
      "Are you sure?",
      "This product will be added to your unwanted list.",
      "Yes",
      "No",
      () => {
        addUnwantedIdea(id);
        Notify.success("This product has been added to your unwanted list.", {
          timeout: 5000,
          showOnlyTheLastOne: true,
        });
      }
    );
  };

  if (!p) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center rounded-box border border-base-300 bg-base-100 p-8">
          <h1 className="font-newsreader text-4xl font-extrabold text-primary italic">
            Idea Not Found
          </h1>

          <p className="mt-3 text-base-content/80">
            This product does not exist in the museum.
          </p>

          <Link to="/" className="btn btn-accent mt-6">
            Back To Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="px-6 my-10">
      <article className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl bg-base-100 border border-base-300 shadow-sm p-5 md:p-8">
        <figure className="rounded-xl overflow-hidden bg-base-200 h-85 md:h-140">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover object-center"
          />
        </figure>

        <section className="space-y-5">
          <div>
            <h1 className="font-newsreader text-4xl md:text-6xl font-extrabold italic text-primary mt-2">
              {p.name}
            </h1>
            <p className="mt-3 text-lg text-base-content/80">
              {p.short_details}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-xl bg-base-200 p-4">
              <p className="text-xs uppercase text-base-content/60">Rating</p>
              <div className="mt-1 flex items-center gap-2 text-lg font-semibold">
                <Star size={18} className="text-warning fill-warning" />
                <span>{p.rating}</span>
              </div>
            </div>

            <div className="rounded-xl bg-base-200 p-4">
              <p className="text-xs uppercase text-base-content/60">Views</p>
              <div className="mt-1 flex items-center gap-2 text-lg font-semibold">
                <Eye size={18} />
                <span>
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(p.views)}
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-base-200 p-4 col-span-2 sm:col-span-1">
              <p className="text-xs uppercase text-base-content/60">Created</p>
              <p className="mt-1 text-lg font-semibold">{p.created_date}</p>
            </div>
          </div>

          <div>
            <h2 className="font-newsreader text-2xl font-bold text-primary italic">
              Why It Is Iconic
            </h2>
            <p className="mt-2 leading-7 text-base-content/85">
              {p.long_details}
            </p>
          </div>
          <p>
            <span className="font-semibold">Key Feature:</span> {p.key_feature}
          </p>
          <div className="space-x-2">
            <button
              to="/"
              className="btn btn-accent"
              onClick={() => handleWantThis(p.id)}
            >
              I Actually Want This
            </button>
            <button
              to="/"
              className="btn btn-accent btn-outline"
              onClick={() => handleDontWantThis(p.id)}
            >
              I Don’t Want This
            </button>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200/60 p-4 space-y-3">
            <blockquote className="border-l-4 border-accent pl-4 italic text-base-content/80">
              {p.quote}
            </blockquote>
          </div>
        </section>
      </article>
    </main>
  );
}
