export function Item({ product }) {
    return ( 
    
        <section className = "cajaProductos" >
        <h1 class = "cajaProductos__title--orange" > { product.nombre } </h1>
        <div className = "productos" >
        <img 
        src = { product.foto }
        alt = { product.descripcion }/>  
        <h3 className = "cajaProductos__text--grey" > { product.descripcion } </h3>  
        <p className = "precio" > $: { product.precio }. - </p>  
        <button className = "btn btn-danger btn-sm" > Agregar Carro </button><br/>
        <h3 className = "cajaProductos__text--grey" > Stock Disponible { product.stock } </h3>
        </div> </section >
     
    )
}

//seleccion.options[seleccion.selectedIndex].value