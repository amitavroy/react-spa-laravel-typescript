interface TodoInterface {
  id: number;
  description: string;
  user_id: number;
  is_completed: boolean;
  ends_at: string;
  order: number;
  pending: string;
  badge: string;
}

export default TodoInterface;
