export interface IOrder {
    id: number;
    name: string;
    describe: string;
  }
  
export type TCreateOrder =  Omit<IOrder, 'id'>
  
  // дженерик <IOrder[]>
  // interface - для описания типа объекта
  // Omit - позволяет исключать типы или свойства из другого типа

export interface OrderState {
    orders: object[];
    isLoadingFetch: boolean;
}