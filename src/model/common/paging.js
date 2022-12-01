export default class Paging {
  constructor (page = 1, startRow = 0, total = 0, pages = 0, pageSize = 10) {
    this.page = page;
    this.startRow = startRow;
    this.total = total;
    this.pages = pages;
    this.pageSize = pageSize;
  }

  get page() {
    return this._page;
  }
  set page(value = 1) {
    this._page = value;
  }

  get total() {
    return this._total;
  }
  set total(value) {
    this._total = Number(value);
  }

  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Number(value);
  }

  setPageInfo() {
    let tempPage = parseInt(this.total / this.pageSize);
    let lastPage = parseInt(this.total % this.pageSize);
    this._pages = (tempPage + (lastPage > 0 ? 1 : 0));
    this._startRow = (parseInt((this._page - 1) * this.pageSize));
  }
}