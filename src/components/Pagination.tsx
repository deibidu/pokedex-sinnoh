import "./Pagination.css";

interface Props {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  onChangePage: (newPage: number) => void;
  totalItems: number;
  perPage: number;
  changePage: (newPage: number) => void;
}

export const Pagination = ({
  page,
  nextPage,
  prevPage,
  onChangePage,
  totalItems,
  perPage,
  changePage,
}: Props) => {
  const lastPage = Math.max(1, Math.ceil(totalItems / perPage)); // Garantizamos que la última página sea al menos 1

  const handlePageChange = (newPage: number) => {
    onChangePage(newPage);
    changePage(newPage); // Actualizo el estado de la página
  };

  return (
    <>
      <div className="pagination">
        <button
          className="paginationButton"
          disabled={page === 1}
          onClick={() => {
            prevPage();
            handlePageChange(page - 1);
          }}
        >
          &lt;
        </button>
        <span>{page}</span>
        <button
          className="paginationButton"
          disabled={page === lastPage}
          onClick={() => {
            nextPage();
            handlePageChange(page + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
};
