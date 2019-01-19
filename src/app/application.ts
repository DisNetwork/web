export interface Application {
    id: string;
    name: string;
    bots: number;
    guilds: number;
    healthy?: boolean;
}
