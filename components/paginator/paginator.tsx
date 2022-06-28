import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export interface PaginatorProps {
  first: number;
  totalElements: number;
  pageSize: number;
  pageLinkSize: number;
  onPageChange: (newPage: number) => void;
}

const Paginator = ({
  first,
  pageSize,
  totalElements,
  pageLinkSize,
  onPageChange,
}: PaginatorProps) => {
  const page = Math.floor(first / pageSize);
  const pageCount = Math.ceil(totalElements / pageSize);
  const isFirstPage = page === 0;
  const isLastPage = page === pageCount - 1;

  const calculatePageLinkBoundaries = () => {
    let numberOfPages = pageCount;
    let visiblePages = Math.min(pageLinkSize, numberOfPages);

    let start = Math.max(0, Math.ceil(page - visiblePages / 2));
    let end = Math.min(numberOfPages - 1, start + visiblePages - 1);

    let delta = pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);

    return [start, end];
  };

  const updatePageLinks = () => {
    const pageLinks = [];
    const [start, end] = calculatePageLinkBoundaries();

    for (let i = start; i <= end; i++) {
      pageLinks.push(i + 1);
    }

    return pageLinks;
  };

  return (
    <div className="flex items-center justify-center">
      {!isFirstPage && (
        <button onClick={() => onPageChange(first - pageSize)}>
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      )}
      <span className="space-x-4">
        {updatePageLinks().map((pag) => (
          <button
            key={pag}
            className={`font-[Poppins] text-lg ${
              first === (pag - 1) * pageSize ? "font-bold" : ""
            }`}
            onClick={() => onPageChange((pag - 1) * pageSize)}
          >
            {pag}
          </button>
        ))}
      </span>
      {!isLastPage && (
        <button onClick={() => onPageChange(first + pageSize)}>
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Paginator;
