import { CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const Login = () => {
  return (
    
      
        <CssVarsProvider>
          <main>
            
            <Sheet
              sx={{
                width: 400,
                mx: 'auto', // margin left & right
                mt: 20, // margin top & bottom
                py: 8, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'md',
                boxShadow: 'md',
                
              }}
              variant="outlined"
            >
              
              <Typography>
                  <b className='font-medium'> Welcome back, login to access your account</b>
               </Typography>
               
                
              

              <FormControl>
                <FormLabel className=' font-medium' >Email</FormLabel>
                <Input name="email" type="email" placeholder="example@mail.com"/>
              </FormControl>

              <FormControl>
                <FormLabel className=' font-medium '>Password</FormLabel>
                <Input name="password" type="password" placeholder="password" />
              </FormControl>
    
              <Button  >Log in</Button>
              
            </Sheet>
          </main>
        </CssVarsProvider>
      
    
  )
}

export default Login
