import { Link } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Heading,Divider,Text, Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const Item = ({id, name, img, price}) =>{

    return (
        <div >
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
                    <Center>
                        <Text color='blue.600' fontSize='1.5rem'
                        mt={10}>
                            ${price}
                        </Text>
                    </Center>
                    <Divider />
                    <CardFooter>
                        <Link to={`/item/${id}`} className='detail'><button variant='ghost' colorScheme='blue'>Ver Detalle</button></Link>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    )
}
export default Item