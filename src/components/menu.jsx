function Menu({children}) {
    return (
        <button className="text-back hover:text-white hover:bg-regal rounded-3xl px-4 py-2 hover:cursor-pointer">
            <p>{children}</p>
        </button>
    )
}

export default Menu