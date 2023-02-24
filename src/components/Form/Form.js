const Form = () =>{
    return(
        <div>
            <Center>
                <Card padding='55px' backgroundColor='#0001'>
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name'/>
                        
                        <FormLabel>Number</FormLabel>
                        <Input placeholder='+54 9 ...' />
                        
                        <FormLabel>Email address</FormLabel>
                        <Input type='email'/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </Card>  
                </Center>   
                <Center>
                    <Button onClick={createOrder} mt='10px'>Generar orden</Button> //se va a pasar por props
                </Center>
        </div>
    )
}