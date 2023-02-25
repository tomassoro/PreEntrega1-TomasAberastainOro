
import { Center, FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Card,
    Button, } from '@chakra-ui/react'

const Form = (onClick) =>{
    return(
        <div>
            <Center>
                <Card padding='55px' backgroundColor='#0001'>
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                        <FormLabel>Number</FormLabel>
                        <Input placeholder='+54 9 ...' />
                        
                        <FormLabel>Email address</FormLabel>
                        <Input type='email'/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </Card>  
                </Center>   
                <Center>
                    <Button onClick={()=>{onClick()}} mt='10px'>Generar orden</Button> 
                </Center>
        </div>
    )
}
export default Form