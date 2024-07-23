import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [page, changePage] = useState<number>(1);

  console.log({ searchParams });

  const nextPage = () => {
    const newPage = page + 1;
    changePage(newPage);
    navigate(`/?page=${newPage}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const prevPage = () => {
    const newPage = page - 1;
    changePage(newPage);
    navigate(`/?page=${newPage}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const backToHome = () => {
    changePage(1);
    navigate("/");
  };

  useEffect(() => {
    const pageParam = parseInt(searchParams.get("page")! || "1", 10);
    changePage(pageParam);
  }, [searchParams]);

  return { page, nextPage, prevPage, changePage, backToHome };
};
