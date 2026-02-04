export default function ALLFilters({ AllFilters }) {
  return (
    <div className="flex  overflow-hidden">
      <div className="carousel carousel-end rounded-box flex gap-4">
        {AllFilters.map((Fill, i) => {
          return (
            <div key={i} className="carousel-item">
              <button className="btn btn-secondary w-28">{Fill}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
