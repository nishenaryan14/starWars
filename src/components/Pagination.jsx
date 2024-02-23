import { usePage } from "../context/PageContext";

export default function Pagination() {
  // Use the usePage hook to access the setPage function from the PageContext
  const { page, setPage } = usePage();

  return (
    <div className="pagination">
      {/* Render page numbers as clickable elements */}
      <div
        className={`pageBtn ${page === 1 && "active"}`}
        onClick={() => setPage(1)}
      >
        1
      </div>
      <div
        className={`pageBtn ${page === 2 && "active"}`}
        onClick={() => setPage(2)}
      >
        2
      </div>
    </div>
  );
}
