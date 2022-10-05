
import { defineStore } from 'pinia'
import { Product } from '@stores/models/';
type ProductsState = {
  loading: boolean,
  product: Product | null,
  backet:number[],
  products:Product[],
  searchTerm:string,
}
export const useProductsStore = defineStore('products', {
  state: ():ProductsState => {
    return {
      loading: false,
      product: null,
      products:[],
      backet:[],
      searchTerm:''
     
    }
  },
  getters:{
    getProductsFilteredByTitle:state=>{
      if(!state.searchTerm) return state.products
      else{
        const lSearchTerm = state.searchTerm.toLocaleLowerCase()
       return state.products.filter(product=>
        product.fullTitle.toLocaleLowerCase().includes(lSearchTerm)
        )
      }
    }
  },
  actions: {
    
  getAllProducts(){
    const backetStr = localStorage.getItem('productsBacket')
    if(backetStr){
   const backetAr = JSON.parse(backetStr) as string[]
console.log(backetAr)
this.backet = backetAr.map(v=> +v)
    }
this.products = [
  new Product(1,'boticelli','Рождение Венеры','Сандро Боттичелли',2e6,1e6,1),
  new Product(2,'leonardo','Тайная вечеря','Леонардо да Винчи',3e6,0,1),
  new Product(3,'mikelangelo','Сотворение Адама','Микеланджело',6e6,1e6,1),
  new Product(4,'rembrandt','Урок Анатомии','Рембрандт',2e6,1e6)
]

  },
  setBucketCache(){
    localStorage.setItem('productsBacket',JSON.stringify(this.backet))
  },
  setProductToBacket(productId:number){
if(this.backet.find(id=>productId === id)){  
  this.backet = this.backet.filter(id=>productId !== id)
  this.setBucketCache()
}
else {
  this.backet.push(productId)
  this.setBucketCache()

}
  }

  }
  })


