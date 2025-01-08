import './index.css'

const Header=({cartItems})=>{
    const getCartItemsCount=()=>
    cartItems.reduce((acc,item) =>acc+item.quantity, 0)

    const renderCartICon=()=>(
        <div classname='cart-icon-container'>
        <svg
        xmlns='https://www.w3.org/2000/svg'
        width='35'
        height='35'
        fill='#585555'
        classname='bi bi-cart3 cart-icon'
        viewBox='0 0 16 16'
        >
        <path d=' '/>
        </svg>
        <div classname='cart-count-badge d-flex justify-content-center align-items-center'>
        <p classname='m-0 cart-count'>{getCartItemsCount()}</p>
        </div>


        </div>
    )

    return(
        <header classname='p-4 d-flex flex-row align-items-center nav-header'>
        <h1 classname='m-0 logo-heading'>UNI Resto Cafe</h1>
        <div classname='d-flex flex-row align-items-center ms-auto'>
        <p classname='mt-0 mb-0 me-2 d-none d-sm-block my-orders-text'>
        My Orders
        </p>
        {renderCartICon()}
        </div>
        </header>
    )
}

export default Header