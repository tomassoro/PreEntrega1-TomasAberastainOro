import { Text } from "@chakra-ui/react"
const Footer = () =>{
    return(
            <footer style={{display:'flex', justifyContent:'center', height:'80px', alignItems:'center', backgroundColor:'#001', color:'aliceblue', marginTop:'20px'}}>
                <Text class="footer">Derechos reservados por copyright - ToroDev</Text>
            </footer>
    )
}
export default Footer