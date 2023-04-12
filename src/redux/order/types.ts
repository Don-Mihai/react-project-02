export interface IOrder {
    id: number;
    name: string;
    describe: string;
    userId: number;
}

export type TCreateOrder = Omit<IOrder, 'id'>;

export type FormValuesOrder = Omit<IOrder, 'id' | 'userId'>;

// дженерик <IOrder[]>
// interface - для описания типа объекта
// Omit - позволяет исключать типы или свойства из другого типа

export interface FilterOrders {
    dev: boolean;
    test: boolean;
    design: boolean;
}
export interface OrderState {
    orders: IOrder[];
    myOrders: IOrder[];
    filterOrders: FilterOrders;
    isLoadingFetch: boolean;
}
