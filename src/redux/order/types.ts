export interface IOrder {
    _id: string;
    name: string;
    describe: string;
    userId: number;
    filter: string;
}

export enum TYPE_FILTERS {
    DEV = 'Разработка',
    TEST = 'Тестирование',
    DESIGN = 'Дизайн',
    All = 'Все',
}

export type TCreateOrder = Omit<IOrder, '_id'>;

export type FormValuesOrder = Omit<IOrder, '_id' | 'userId'>;

// дженерик <IOrder[]>
// interface - для описания типа объекта
// Omit - позволяет исключать типы или свойства из другого типа

export interface FilterOrders {
    [TYPE_FILTERS.All]: boolean;
    [TYPE_FILTERS.DEV]: boolean;
    [TYPE_FILTERS.TEST]: boolean;
    [TYPE_FILTERS.DESIGN]: boolean;
}
export interface OrderState {
    orders: IOrder[];
    myOrders: IOrder[];
    filterOrders: FilterOrders;
    isLoadingFetch: boolean;
}

export const default_filter_obj = { [TYPE_FILTERS.All]: true, [TYPE_FILTERS.DEV]: false, [TYPE_FILTERS.TEST]: false, [TYPE_FILTERS.DESIGN]: false };
