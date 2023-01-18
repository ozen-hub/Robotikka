export default class ProductDTO {
  constructor(
    public displayName:string,
    public description:string,
    public unitPrice:number,
    public qty:number,
    public sellingPrice:number,
  ) {
  }
}
