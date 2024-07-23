import "./Pagination.css";

interface Props {
  perPage: number;
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  maxItems: number;
}

export const Pagination = ({
  perPage,
  page,
  nextPage,
  prevPage,
  maxItems,
}: Props) => {
  const lastPage = Math.ceil(maxItems / perPage);

  return (
    <>
      <div className="pagination">
        <button
          className="paginationButton"
          disabled={page === 1}
          onClick={prevPage}
        >
          &lt;
        </button>
        <span>{page}</span>
        <button
          className="paginationButton"
          disabled={page === lastPage}
          onClick={nextPage}
        >
          &gt;
        </button>
      </div>
    </>
  );
};
