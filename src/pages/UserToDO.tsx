import { useParams } from 'react-router-dom';
import { todo, type Todo } from './UserDef';
import { UserTabs } from '../widgets/UserTabs/UserTabs';
import { Main } from '../widgets/UserTabs/UserTabs';

export const UserTodos: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const userTodos = todo.filter((p) => p.userId === Number(userId));

    if (userTodos.length === 0) {
        return <div>У пользователя нет задач            <Main></Main>
        </div>;
    }

    return (
        <div>
            <h2>Задачи пользователя</h2>
            <Main></Main>
            <UserTabs userId={Number(userId)} />
            {userTodos.map((todo) => (
                <TodoCard key={todo.todoId} todo={todo} />
            ))}
        </div>
    );
};

const TodoCard: React.FC<{ todo: Todo }> = ({ todo }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>{todo.title}</h3>
            <p>ID задачи: {todo.todoId}</p>
            <p>ID пользователя: {todo.userId}</p>
        </div>
    );
};