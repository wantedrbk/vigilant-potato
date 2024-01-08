// import { Profile } from "entities/Profile";

import { User } from "entities/User"

// export type ArticleProfile = Pick<Profile, 'username' | 'firstname' | 'lastname' >;


export enum ArticleViewType {
	LIST = "LIST",
	GRID = "GRID"
}

export enum ArticleBlockType {
	TEXT = 'TEXT',
	IMAGE = 'IMAGE',
	CARD = 'CARD',
	CODE = 'CODE',
	OTHER = 'OTHER'
}

export enum ArticleType {
	IT = 'IT',
	SPORT = 'SPORT',
	BUSINESS = 'BUSINESS',
	ART = 'ART',
	NEWS = 'NEWS',
	OTHER = 'OTHER'
}

export interface ArticleBlockBase {
	id: string
	type: ArticleBlockType
}

export interface ArticleBlockText extends ArticleBlockBase {
	type: ArticleBlockType.TEXT
	title?: string
	paragraphs: string[]
}

export interface ArticleBlockImage extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE
	link: string
	title: string
}

export interface ArticleBlockCode extends ArticleBlockBase {
	type: ArticleBlockType.CODE
	content: string
}

export interface ArticleBlockCard extends ArticleBlockBase {
	type: ArticleBlockType.CARD
	username: string
	fullname: string
}

export type ArticlesBlockAll =
	| ArticleBlockText
	| ArticleBlockImage
	| ArticleBlockCode
	| ArticleBlockCard

export interface Article {
	id: string;
	title: string;
	user: User;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticlesBlockAll[];
}
