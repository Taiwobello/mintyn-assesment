const showPaginationNumber = (i, currentPage, pageCount) => {
  const pageToRender = i + 1;
  // Always show first and last pages
  if (pageToRender === 1 || pageToRender === pageCount) {
    return true;
  }
  // Always show pages next to the current
  if (Math.abs(currentPage - pageToRender) <= 2) {
    return true;
  }
  // For when current page is at the left and right extremes
  if (currentPage <= 2 && pageToRender <= 5) {
    return true;
  }
  if (currentPage >= pageCount - 2 && pageToRender >= pageCount - 4) {
    return true;
  }
  return false;
};

export const getPrefilledPaginationControls = (currentPage, pageCount) => {
  let includeSkip = false;
  const output = Array(pageCount)
    .fill("")
    .map((_, i) => {
      const showControl = showPaginationNumber(i, currentPage, pageCount);
      const control = showControl
        ? { pageNumber: i + 1 }
        : includeSkip
        ? { skipDirection: currentPage > i + 1 ? "backward" : "forward" }
        : null;
      includeSkip = showControl;
      return control;
    })
    .filter(Boolean);
  return output;
};

export const currentNumberOfResults = (total, page, perPage) => {
  if (perPage * page < total) {
    return perPage;
  }
  if (perPage * page >= total) {
    return total - perPage * (page - 1);
  }
  return total;
};
