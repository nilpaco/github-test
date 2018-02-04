export class User {
    public id: number;
    public login: string;
    public avatar_url: string;
    public name: string;
    public bio?: string;
    public followers_url?: string;
    public repos_url?: string;
    public followersList?: Array<any>;
    public reposList?: Array<any>;
}