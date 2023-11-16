function CostItem() {
    const costDate = new Date();
    const costItem = "Item";
    const costAmount = 450;

    return (
        <div className="flex justify-between items-center bg-[#bd8025] rounded drop-shadow-[0_2px_7px_rgba(0,0,0,0.25)] p-1 my-2">
            <p>{costDate.toISOString()}</p>
            <div className="flex flex-col items-end justify-start gap-2">
                <div className="text-[16px] text-[#fefae1] font-bold bg-[#2a5b84] border-[1px] border-[#ffffff] rounded p-1">£{costAmount}</div>
                <h2 className="text-[#ffffff] text-[16px] mx-2">{costItem}</h2>
            </div>
        </div>
    )
}

export default CostItem;