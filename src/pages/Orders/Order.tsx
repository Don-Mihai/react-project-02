import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header';
import Orders from '../../components/Orders/Orders';
import './Order.scss';

const Order = () => {
    return (
        <div className="page-module">
            <Header></Header>
            <div className="page-module__body">
                <Orders className="page-module__orders"></Orders>
                <Filters></Filters>
            </div>
        </div>
    );
};

export default Order;
