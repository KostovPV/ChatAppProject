import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export default function SideBar() {
    return (
        <div className="w-[200px] sm:w-[300px] border-r border-slate-500 p-4 flex flex-col">
             {/* <div className=" border-r border-slate-500 p-4 flex flex-col"> */}
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}



