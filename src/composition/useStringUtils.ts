export const useStringUtils = ()=>{

    const priceFormatter=(val:number)=>{
        return (val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
     }
    return {priceFormatter}
}