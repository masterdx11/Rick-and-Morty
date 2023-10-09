//? currentPage = la pagina actual
//? residents = arreglo total de residentes en la dimension actual
const paginationLogic = (currentPage, residents) => {
    //! 
    if (residents.length === 0) {
        return {
            pages: [1],
            residentsInpage: []
        }
    }
  const RESIDENTS_PER_PAGE = 20;

  //* Cantidad total de paginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //* residentes que se muestran por pagina actual
  const sliceEnd = RESIDENTS_PER_PAGE * currentPage;
  const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
  const residentsInpage = residents.slice(sliceStart, sliceEnd);

  //* Generacion de arreglo de las paginas que se van a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return {
    residentsInpage,
    pages,
  };
};

export { paginationLogic };
