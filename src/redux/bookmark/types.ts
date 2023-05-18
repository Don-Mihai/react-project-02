export interface IBookmark {
    id: string;
    userId: string;
    orderId: string;
}

export interface BookmarkState {
    bookmarks: IBookmark[];
}

export type TCreateBookmark = Omit<IBookmark, 'id'>;
