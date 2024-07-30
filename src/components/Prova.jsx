import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Prova() {
    const navigate = useNavigate()
    return (
        <div className="container">
            <h1 className="text-center display-4">React Bootstrap Test</h1>
            <p className="text-center text-muted">This is a test of the React Bootstrap library</p>
            <Button variant="primary" onClick={() => navigate('/user-detail')}>Vai a User-Detail</Button>
            <h1>Hello</h1>
        </div>
    );
}

export default Prova