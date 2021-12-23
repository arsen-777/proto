const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const Pagination = {
  curentPage: 1,
  init(arr, pageSize) {
    let pages = {};
    let pageNumber = 1;
    let pageArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (i % pageSize === 0 && i !== 0) {
        pages[pageNumber] = pageArray;
        pageNumber++;
        pageArray = [];
      }
      pageArray.push(arr[i]);
    }
    pages[pageNumber] = pageArray;
    Pagination.pages = pages;
  },
  getPageItems() {
    return Pagination.pages[Pagination.curentPage];
  },
  goToPage(pageNum) {
    return Pagination.pages[pageNum];
  },
  nextPage() {
    Pagination.curentPage++;
    return Pagination.pages[Pagination.curentPage];
  },
  prevPage() {
    Pagination.curentPage--;
    return Pagination.pages[Pagination.curentPage];
  },
  firstPage() {
    Pagination.curentPage = 1;
    return Pagination.pages[Pagination.curentPage];
  },
  lastPage() {
    Pagination.curentPage = Object.keys(Pagination.pages)[
      Object.keys(Pagination.pages).length - 1
    ];
    return Pagination.pages[Pagination.curentPage];
  },
};

let last = Pagination.init(alphabetArray, 4);
console.log(Pagination.pages);
console.log(Pagination.getPageItems());
console.log(Pagination.nextPage());
console.log(Pagination.getPageItems());
console.log(Pagination.nextPage());
console.log(Pagination.nextPage());
console.log(Pagination.getPageItems());
console.log(Pagination.goToPage(3));
console.log(Pagination.prevPage());
console.log(Pagination.firstPage());
console.log(Pagination.lastPage());
