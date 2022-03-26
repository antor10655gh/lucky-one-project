import React from 'react';

const Questions = () => {
    return (
        <div className='container text-start my-5'>
            <div className="qs-title text-center my-5">
                <h1><span style={{color: 'rgb(228, 49, 49)'}}>Question</span> Is Here</h1>
            </div>
            <div className="qs-1">
                <h3>How React Work ?</h3>
                <p>React is a JavaScript-based UI development library. In react the return value is an object. When we call the component that time we get the real return value. However, In React First JSX gets converted to many React.createElement function calls. Then each of them returns the appropriate object. The fact that JSX gets converted to the React.createElement function is the reason why we always have to import React when using JSX.</p>
            </div>
            <div className="qs-1">
                <h3>Props VS State</h3>
                <p>Props and State are very important part of React and the difference is given bellow:</p>
                <h5>Props:</h5>
                <ul>
                    <li>this.props.name</li>
                    <li>Props are immutable.</li>
                    <li>You can pass properties from parent components.</li>
                    <li>Both are accessible as attributes of the components class.</li>
                </ul>
                <br />
                <h5>State:</h5>
                <ul>
                    <li>this.state.name</li>
                    <li>States are immutable.</li>
                    <li>You can define states in the component itself.</li>
                    <li>The state is set and updated by the object.</li>
                </ul>
            </div>
        </div>
    );
};

export default Questions;