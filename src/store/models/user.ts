import { User } from "@/store/models/chats";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

interface UserState {
    user: User;

    setLoggedUser(user: User): void;
}

@Module({namespaced: true, name: "UserStore"})
class UserStore extends VuexModule implements UserState{
    user: User = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        career: -1
    }

    @Mutation
    setLoggedUser(user: User): void{
        this.user = user;
    }
}

export default UserStore

