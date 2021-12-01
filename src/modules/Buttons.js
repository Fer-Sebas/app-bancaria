import iconClose from '../img/iconClose.svg'

function ButtonClose() {
    return(
        <div className="close">
            <img src={iconClose} alt="Close card" />
        </div>
    )
}

function ButtonAccount() {
    return(
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 0.5C6.048 0.5 0 6.548 0 14C0 21.452 6.048 27.5 13.5 27.5C20.952 27.5 27 21.452 27 14C27 6.548 20.952 0.5 13.5 0.5ZM13.5 4.55C15.741 4.55 17.55 6.359 17.55 8.6C17.55 10.841 15.741 12.65 13.5 12.65C11.259 12.65 9.45 10.841 9.45 8.6C9.45 6.359 11.259 4.55 13.5 4.55ZM5.4 19.373C7.1415 21.992 10.125 23.72 13.5 23.72C16.875 23.72 19.8585 21.992 21.6 19.373C21.5595 16.6865 16.1865 15.215 13.5 15.215C10.8 15.215 5.4405 16.6865 5.4 19.373Z" fill="#FFFFFE"/>
        </svg>
    )
}

function ButtonDelete(){
    return (
        <button className="icon">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6451 0.367067C15.4183 0.139835 15.1105 0.012135 14.7895 0.012135C14.4685 0.012135 14.1607 0.139835 13.934 0.367067L8 6.28895L2.06598 0.354932C1.83926 0.1277 1.53146 0 1.21047 0C0.889474 0 0.581669 0.1277 0.354949 0.354932C-0.118316 0.828197 -0.118316 1.5927 0.354949 2.06597L6.28896 7.99999L0.354949 13.934C-0.118316 14.4073 -0.118316 15.1718 0.354949 15.6451C0.828214 16.1183 1.59272 16.1183 2.06598 15.6451L8 9.71103L13.934 15.6451C14.4073 16.1183 15.1718 16.1183 15.6451 15.6451C16.1183 15.1718 16.1183 14.4073 15.6451 13.934L9.71103 7.99999L15.6451 2.06597C16.1062 1.60484 16.1062 0.828197 15.6451 0.367067Z" fill="black" fill-opacity="0.54"/>
            </svg>
        </button>
    )
}

function ButtonComfirm (){
    return (
        <button className="icon">
            <svg width="22" height="16" viewBox="0 0 22 16"  xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7917 12.9304L2.23545 8.5153C1.99013 8.27705 1.65708 8.14315 1.30976 8.14315C0.962436 8.14315 0.629382 8.27705 0.384064 8.5153C-0.128021 9.01152 -0.128021 9.81311 0.384064 10.3093L5.87258 15.6278C6.38466 16.1241 7.21188 16.1241 7.72396 15.6278L21.6159 2.16619C22.128 1.66996 22.128 0.868372 21.6159 0.372149C21.3706 0.133895 21.0376 0 20.6902 0C20.3429 0 20.0099 0.133895 19.7645 0.372149L6.7917 12.9304Z" fill="black" fill-opacity="0.54"/>
            </svg>
        </button>
    )
}


export {ButtonClose, ButtonAccount, ButtonDelete, ButtonComfirm}