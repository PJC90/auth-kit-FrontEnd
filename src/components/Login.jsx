import useSignIn from 'react-auth-kit/hooks/useSignIn';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  {useState}  from "react";
import  {useNavigate} from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      
      const response = await fetch('http://localhost:3008/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        signIn({
          auth: {
            token: data.token,
            type: 'Bearer',
          },
          userState: {
            name: 'User',
            isLoggedIn: true
          },
        });
        const user = data
        navigate('/user-detail', {state:{user}});
      } else {
        console.error('Login failed');
      }
        // if(response){
        //     const data = await response.json()
        //     console.log(data)
        // }else{
        //     throw new Error("Errore nel login")
        // }
    };
    return(
        <>
         <div className="m-5 p-5 d-flex w-50 flex-column">
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </div>
        </>
    )
}
export default Login