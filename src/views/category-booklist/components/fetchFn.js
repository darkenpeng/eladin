import * as Api from "../../api.js";


  export function fetchBooks() {
    return Api.get('https://eladin-lgurfdxfjq-du.a.run.app/api/books');
    
  }


export function fetchOrders() {
    return Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/order/");    
}


export function fetchCategory() {
    return Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/category");
}
