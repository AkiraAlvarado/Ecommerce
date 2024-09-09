import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import ProductCard from "../molecules/ProductCard";

const Products = () => {

   const { data, error, loading } = useAxios("public/products");
   const [result, setResult] = useState([]);
   const [filterValue, setFilterValue] = useState("");

   useEffect(() => {
      if (data) {
         setResult(data);
      }
   }, [data]);

   // Entra cada vez que el filter Value entra, es decir, cada vez que hago un cambio en input
   useEffect(() => {
      const timeoutId = setTimeout(() => {
         // Verifica si alguno de los nombres de productos , contiene el input que estoy escribiendo
         const resulta = data?.filter(p => JSON.stringify(p).toLowerCase().includes(filterValue.toLowerCase()));
         setResult(resulta);
      }, 1000);

      return () => clearTimeout(timeoutId); // Limpiar el timeout si el usuario sigue escribiendo antes de que pase el segundo.
   }, [filterValue, data]);

   if (loading) return <h1>CARGANDO....</h1>;
   if (error) return <h1>Error en la petición de productos</h1>;

   const handleFilter = (e) => {
      setFilterValue(e.target.value);
   };

   return (
      <div>
         <h1>Productos</h1>
         <input onChange={handleFilter} type="text" placeholder="filtro de productos" className="mb-4" />
         <div className="grid grid-cols-4 gap-6">
            {result && result.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
};

export default Products;