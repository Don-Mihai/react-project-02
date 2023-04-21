export interface IBookmark {
    id: number;
    userId: number;
    orderId: number;
}

export interface BookmarkState {
    bookmarks: IBookmark[];
}

export type TCreateBookmark = Omit<IBookmark, 'id'>;
