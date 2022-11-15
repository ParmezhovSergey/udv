export interface IUser {
	id: number;
	name: string;
	text: Array<string>;
};

export interface IMessage {
	userId: number;
	text: Array<string>;

}