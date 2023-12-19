export default function ProductsDetails({params}: {params: {productID: string}}) {
    return <p>{params.productID}</p>
}