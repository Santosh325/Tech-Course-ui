function Filter(props) {
    const filterData = props.filterData;
    const category = props.category;
    const setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }
    return(
    <div className="w-11/12 flex justify-center items-center text-white py-4 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto">
       {
        filterData.map((item) => 
                <button key={item.id} className={`bg-black py-2 px-3 rounded-md font-md border-2 hover:bg-opacity-50 transistion-all duration-300
                ${category === item.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
                `}
                onClick={() => filterHandler(item.title)}
                > {item.title}</button>
        )
       }
    </div>);
}

export default Filter;