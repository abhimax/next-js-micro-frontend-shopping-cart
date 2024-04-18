import TodosPage from 'checkout/todos';

console.log(TodosPage.getInitialProps)
const Todos = TodosPage;
Todos.getInitialProps = TodosPage.getInitialProps;
export default Todos;