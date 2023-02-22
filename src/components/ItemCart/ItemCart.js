import { Button, Image } from "@chakra-ui/react"
const ItemCart = ({name, quantity, img, price }) =>{
    return(
        <article className="ItemCart">
            <Image src={img} alt={name} boxSize='115px' objectFit='cover' borderRadius='lg'/>
            <div className="titleCart">
                <strong>Nombre</strong>
                <h3>{name}</h3>
            </div>
            <div className="titleCart">
                <strong>Cantidad</strong>
                <strong>{quantity}</strong>
            </div>
            <div className="titleCart">
                <strong>Precio</strong>
                <strong>${price}</strong>
            </div>
            <Button colorScheme='red'><img style={{height:'25px'}} src="./Images/delete.png" alt="delete"/></Button>
        </article>
    )
}
export default ItemCart