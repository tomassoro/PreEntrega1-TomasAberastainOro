import { Text } from "@chakra-ui/react"
const Footer = () =>{
    return(
            <footer style={{display:'flex', justifyContent:'center', height:'80px', alignItems:'center', backgroundColor:'#001', color:'aliceblue', marginTop:'10px'}}>
                <Text className="footer">Derechos reservados por copyright - ToroDev</Text>
            </footer>
    )
}   
export default Footer