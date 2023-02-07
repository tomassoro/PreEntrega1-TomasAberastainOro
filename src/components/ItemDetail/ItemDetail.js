import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Card, CardHeader, CardBody, CardFooter, Heading,Divider,Text, Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, isInCart } = useContext(CartContext)
    console.log(quantity)
    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))   
        
        addItem({ id, name, price, quantity})
    }

    return (
        <div>
            <Card minW='xs' maxW='sm'>
            <CardHeader>
                <Heading size='md'>
                    <h4>{name}</h4>
                </Heading>
            </CardHeader>
            <CardBody >
                <Center>           
                    <Image src={img} alt={name} borderRadius='lg' boxSize='250px'
                    objectFit='cover'/>
                </Center>
                    <Divider />
                <Center mt={5}>
                    <Text color='blue.600' fontSize='1.5rem'>
                        ${price}
                    </Text>
                </Center>
                <Center>
                    <Text fontSize='1rem'>
                        {category}
                    </Text>
                </Center>
                <Center>
                    <Text fontSize='1rem'>
                        {description}
                    </Text>

                </Center>
                <CardFooter>
                    {
                        isInCart(id) ?(
                            <Link to='/cart'>Terminar compra</Link>    
                        ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} className='ItemCount'/>
                        )
                    }
                </CardFooter>
            </CardBody>
        </Card>
    </div>
    )
}
export default ItemDetail