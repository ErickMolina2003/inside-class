import { User } from "@/store/models/chats";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

interface UserState {
    user: User;
    isLogged: boolean;

    setLoggedUser(user: User): void;
}

@Module({namespaced: true, name: "UserStore"})
class UserStore extends VuexModule implements UserState{
    user: User = {
        id: -1,
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        career: -1,
        chats: []
    }

    isLogged = false;

    @Mutation
    setLoggedUser(user: User): void{
        this.user = user;
        this.isLogged = true;
    }
}

export default UserStore

