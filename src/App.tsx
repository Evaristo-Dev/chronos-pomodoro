import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { Timer } from 'lucide-react';
function App() {
    return <>
       <Heading>
            <Timer/>
            <h1>Chronos</h1>  
       </Heading>
    </>
}

export default App