
function TopBar({ onScrollToFAQ }) {
    return (
        <>
            <div className="bg-[#001D30] p-2 flex gap-10 justify-center font-custom-regular font-thin ">
                <a href="https://wa.me/31998443042" target="_blank"><button className=" text-xs text-slate-200 cursor-pointer hover:text-[#cec9c9] ">Atendimento via Whatsapp</button> </a>
                <a href="/contato"><button className=" text-xs text-slate-200 cursor-pointer hover:text-[#cec9c9]">Contato</button></a>
                <a href="#faq"><button className=" text-xs text-slate-200 cursor-pointer hover:text-[#cec9c9]">FAQ</button></a>
            </div>
        </>
    )
}

export default TopBar;