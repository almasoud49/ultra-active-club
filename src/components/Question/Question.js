import React from 'react';

const Question = () => {
    return (
        <div>
            <h2>Question-1: How does react work?</h2>

            <p>
            React uses a declarative paradigm that makes it easier to reason about our application and aims to be both efficient and flexible. It designs simple views for each state in our application, and React will efficiently update and render just the right component when our data changes.
            </p>

            <h2>Question -2: Difference between props and useState.</h2>

            <p>The fundamental difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>

            <h2>Question -3: Mention the functions of useEffect without data load.</h2>
            
            <p>
            The useEffect Hook allows us to perform side effects in our components. Some examples of side effects without fetching data are: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
            </p>
        </div>
    );
};

export default Question;