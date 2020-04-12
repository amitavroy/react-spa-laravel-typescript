import UserInterface from "./UserInterface";
interface ActivityInterface {
  caption: string;
  user: UserInterface;
  type: string;
  comments: number;
  likes: number;
}

export default ActivityInterface;
