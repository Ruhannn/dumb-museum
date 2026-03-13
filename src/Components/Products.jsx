import { Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Products({ products }) {
  const [sortBy, setSortBy] = useState("Popular");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "A-Z") return a.name.localeCompare(b.name);
    if (sortBy === "Most Recent")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "Popular") return b.views - a.views;
    return 0;
  });

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-3xl font-newsreader font-extrabold text-primary italic">
            Our Collection
          </h2>

          <p className="text-sm md:text-base text-base-content/80">
            Celebrating the brightest minds with the dimmest ideas.
          </p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <span className="text-sm md:text-base text-base-content whitespace-nowrap">
            Sort By:
          </span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-sm md:select-md w-37.5"
          >
            <option>Popular</option>
            <option>Most Recent</option>
            <option>A-Z</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {sortedProducts.map((product) => (
          <div key={product.id} className="card bg-base-200 shadow-sm">
            <figure className="h-80">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </figure>
            <div className="card-body">
              <div className="card-title justify-between font-newsreader">
                <h1 className="font-bold text-xl">{product.name}</h1>
                <div className="text-base-content/80 flex space-x-1">
                  <Eye />
                  <span>
                    {new Intl.NumberFormat("en", {
                      notation: "compact",
                    }).format(product.views)}
                  </span>
                </div>
              </div>
              <p className="text-md text-secondary/80 italic">
                "{product.short_details}"
              </p>
              <div className="card-actions">
                <Link to={`idea/${product.id}`}>
                  <button className="btn btn-outline btn-accent btn-block">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
