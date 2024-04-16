import TodosPage from 'checkout/totos';

console.log(TodosPage.getInitialProps)
const Todos = TodosPage;
Todos.getInitialProps = TodosPage.getInitialProps;
export default Todos;