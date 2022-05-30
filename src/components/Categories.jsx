import React from "react";

function Categories() {
    const categories = [
        {id: 1, name: 'Все'},
        {id: 2, name: 'Мясные'},
        {id: 3, name: 'Вегетараинская'},
        {id: 4, name: 'Гриль'},
        {id: 5, name: 'Острые'},
        {id: 6, name: 'Закрытые'},
    ]
    const [activeId, setActiveId] = React.useState()

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item) => (
                        <li
                            onClick={() => setActiveId(item.id)}
                            className={activeId === item.id ? 'active' : ''}
                            key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories
