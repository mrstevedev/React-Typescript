import * as React from 'react';
import { Hello } from './components/Hello.tsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    compiler="Typescript" 
                    framework="React" />
            </div>
        )
    }
}

export default App;