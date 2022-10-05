
import { Type } from "class-transformer"
export enum ProductStatus{
AVAILABLE = 'available',NOT_AVAILABLE = 'not_available'
}
export class Product
{

  constructor(  
    public id:number,
    public img:string,
    public title:string = 'картина',
    public author:string = 'автор',
    public coast:number = 0,
    public discount:number = 0,
public count:number = 0
){

}
get fullTitle(){
  return `${this.title} ${this.author}`
}
get discountCoast(){
  return this.coast - this.discount
}
get status():ProductStatus{
return this.count ? ProductStatus.AVAILABLE:ProductStatus.NOT_AVAILABLE
}
}
