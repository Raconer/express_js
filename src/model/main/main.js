import Paging from "../common/paging";
import { merge } from "lodash";

export default class MainPaging extends Paging { 
    constructor(option = {title : null}){ 
        super();
        this.option = option;
    }


    get option(){
        return this._option;
    }
    set option(value) {
        this._option = value;
    }

    setDefData(value = { page: 1 }) {
        this._page = parseInt(value.page) || 1
        
        delete value.page;
        console.log("option")
        console.log(this._option);    
         console.log("value")
        console.log(value);  
        merge(this._option, value);
    }

    toJson() { 
        return {
        page : this._page,
        startRow : this._startRow,
        total : this._total,
        pages : this._pages,
        pageSize : this._pageSize,
        option : this._option
        }
    }
}