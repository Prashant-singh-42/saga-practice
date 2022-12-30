import { useSelector } from "react-redux";

const Header = () => {

    const result = useSelector(state => state.cartData)
    // console.warn('in the component',result)

    return (
        <div className="header">
            <div className="cart-div">
                <span>{ result.length }</span>
                <div className="cart-icon"></div>
            </div>
        </div>
    )
}

export default Header