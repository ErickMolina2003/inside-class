import { User, Chat, Careers } from "@/store/models/chats";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import axios from "axios";

interface UserState {
  user: User;
  isLogged: boolean;
  users: User[];
  members: User[];
  chats: Chat[];
  career: Careers;
  activeChat: number;
  messages: [];

  setLoggedUser(user: User): void;

  setAllUsers(users: User[]): void;

  setCareer(): Promise<void>;

  setAllChats(): Promise<void>;

  getMembersActiveChat(): void;

  getMessages(): void;
}

@Module({ namespaced: true, name: "UserStore" })
class UserStore extends VuexModule implements UserState {
  user: User = {
    id: -1,
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    career: -1,
    chats: [],
  };

  users: User[] = [];

  members: User[] = [];

  chats: Chat[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any = [];

  career = {
    id: -1,
    title: "",
  };

  activeChat = 0;

  isLogged = false;

  @Mutation
  setLoggedUser(user: User): void {
    this.user = user;
    this.isLogged = true;
  }

  @Mutation
  setAllUsers(users: User[]): void {
    this.users = users;
  }

  @Mutation
  async setCareer(): Promise<void> {
    const response = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/carreras.json",
      responseType: "stream",
    });
    for (const index in response.data) {
      if (this.user.career == response.data[index].id) {
        this.career.id = response.data[index].id;
        this.career.title = response.data[index].title;
      }
    }
  }

  @Mutation
  async setAllChats(): Promise<void> {
    this.chats = [];
    const response = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/chats.json",
      responseType: "stream",
    });
    for (const index in response.data) {
      if (response.data[index].careerCode == this.career.id) {
        this.chats.push(response.data[index]);
      }
    }
  }

  @Mutation
  setActiveChat(chatId: number): void {
    this.activeChat = chatId;
  }

  @Mutation
  getMembersActiveChat(): void {
    this.members = [];
    const chatMembers = this.chats[this.activeChat].members;
    this.users.forEach((user) => {
      chatMembers.forEach((member) => {
        if (user.id == member) {
          this.members.push(user);
        }
      });
    });
  }

  @Mutation
  getMessages(): void {
    this.messages = [];
    const chatMessages = this.chats[this.activeChat].messages;

    chatMessages.forEach((message, index) => {
      this.users.forEach((user) => {
        if (message.speaker == user.id) {
          this.messages.push(message);
          this.messages[
            index
          ].speakerTitle = `${user.firstName} ${user.lastName}`;
        }
      });
    });
  }
}

export default UserStore;
