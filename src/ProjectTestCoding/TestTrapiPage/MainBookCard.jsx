export default function MainBookCard({ Products, domain }) {
  return (
    <main className="flex flex-row flex-wrap justify-center items-center gap-x-5 gap-y-10">
      {Products.map((Product) => {
        return (
          <div
            key={Product?.documentId}
            className="card bg-base-100 w-96 shadow-sm text-black"
          >
            <figure>
              <img src={domain + Product?.Prw_image?.url} alt="Shoes" />
            </figure>

            {/* //////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////// */}

            <div className="card-body">
              <h2 className="card-title">
                {Product?.Pro_Name}
                <div className="badge badge-secondary">
                  {Product?.Pro_Price}
                </div>
              </h2>

              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}

              <div>
                <p>{Product?.Pro_Description}</p>
              </div>

              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}

              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {Product?.category?.Cat_Name}
                </div>
              </div>

              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}

              <button className="btn btn-error text-white text-xl font-bold mt-2">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
