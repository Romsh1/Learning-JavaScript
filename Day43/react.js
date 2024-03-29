// Romika Chaudhary
// March 25, 2024
// Day 43

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, World</h1>);


const name = 'Josh Perez';
// const element = <h1>Hello, World!</h1>;

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h2>Hello, Starnger.</h2>;
}