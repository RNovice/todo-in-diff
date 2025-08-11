export const getTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function uuid() {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 8);
  return ts + rand;
}