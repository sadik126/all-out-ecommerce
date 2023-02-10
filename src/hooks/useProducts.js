import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:6060/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return [products, setProducts]
}
export default useProducts;