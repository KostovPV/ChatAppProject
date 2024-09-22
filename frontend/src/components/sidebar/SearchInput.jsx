import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import { useGetConversations } from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { useState } from "react";

export default function SearchInput() {
    const [search, setSearch] = useState('');
    const {selectedConversation}  = useConversation();
    const { conversation} = useGetConversations(); 

    const handleSubmit = (e) => {
            e.preventDefault();
            if(!search) {
                return
            }
            if(search.length < 3) {
              return  toast.error('Conversation must have at least 3 symbols')
            }


    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered rounded-full"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button type="submot" className="btn btn-circle bg-sky-500 text-white">
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}


// import { IoSearchSharp } from "react-icons/io5";

// export default function SearchInput() {
//     return (
//         <form className="flex items-center gap-2">
//             <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//             <button type="submot" className="btn btn-circle bg-sky-500 text-white">
//                 <IoSearchSharp className='w-6 h-6 outline-none' />
//             </button>
//         </form>
//     )
// }
