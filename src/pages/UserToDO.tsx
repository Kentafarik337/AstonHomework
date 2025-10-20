import { useParams } from 'react-router-dom';
import { type Todo } from './UserDef';
import { UserTabs } from '../widgets/UserTabs/UserTabs';
import { useGetTodosByUserIdQuery, useToggleTodoMutation } from '../entities/api/todosApi';
import { Main } from '../widgets/UserTabs/UserTabs';

export const UserTodos: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const { data: userTodos = [], isLoading, isError } = useGetTodosByUserIdQuery(Number(userId));
    if (isLoading) {
        return <div>Загрузка задач пользователя...</div>;
    }
    if (isError) {
        return <div>❌ Ошибка при загрузке задач</div>;
    }
    if (userTodos.length === 0) {
        return (
            <div>
                У пользователя нет задач
                <Main />
            </div>
        );
    }

    return (
        <div>
            <h2>Задачи пользователя</h2>
            <Main />
            <UserTabs userId={Number(userId)} />
            {userTodos.map((todo) => (
                <TodoCard key={todo.todoId} todo={todo} />
            ))}
        </div>
    );
};

const TodoCard: React.FC<{ todo: Todo }> = ({ todo }) => {
    const [toggleTodo] = useToggleTodoMutation();

    const handleToggleStatus = async () => {
        try {
            await toggleTodo({
                ...todo,
                status: !todo.status
            }).unwrap();
        } catch (error) {
            console.error('Ошибка при обновлении задачи:', error);
        }
    };

    return (
        <div 
            style={{ 
                border: '1px solid #ccc', 
                padding: '10px', 
                margin: '10px', 
                borderRadius: '5px',
                backgroundColor: todo.status ? '#e8f5e8' : '#fff'
            }}
        >
            <h3>{todo.title}</h3>
            <p>ID задачи: {todo.todoId}</p>
            <p>ID пользователя: {todo.userId}</p>
            <p>Статус: {todo.status ? 'Выполнено' : 'Не выполнено'}</p>
            <button onClick={handleToggleStatus}>
                {todo.status ? 'Отметить как невыполненное' : 'Отметить как выполненное'}
            </button>
        </div>
    );
};


/*
import { useParams } from 'react-router-dom';
import { todo, type Todo } from './UserDef';
import { UserTabs } from '../widgets/UserTabs/UserTabs';
import { useGetTodosByUserIdQuery } from '../entities/api/todosApi'; 
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
 */