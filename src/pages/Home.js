import { Link } from "react-router-dom";
import Header from "../components/Header/Header";


const Home = () => {

    return(
        <div>
            <Header></Header>
            <div>Home</div>
            <Link to={'/orders/create'}>Создать заказ</Link>
        </div>
    )
}

export default Home;