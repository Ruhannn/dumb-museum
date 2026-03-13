export default function Products({ products }) {
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
            defaultValue="Popular"
            className="select select-sm md:select-md"
          >
            <option>Popular</option>
            <option>Created</option>
            <option>A-Z</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {products.map((product) => (
          <div key={product.id} class="card bg-base-200 shadow-sm">
            <figure>
              <img
              className="hover:scale-110 hover:-rotate-2 transition-all ease-in"
                src={
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt={product.name}
              />
            </figure>
            <div class="card-body ">
              <h2 class="card-title justify-between font-bold text-xl font-newsreader">
                {product.name}
                <span>{product.views}</span>
              </h2>
              <p className="text-md text-secondary/80 italic">
                "{product.short_details}"
              </p>
              <div class="card-actions">
                <button class="btn btn-outline btn-accent btn-block">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
