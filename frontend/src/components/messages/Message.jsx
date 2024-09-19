export default function Message() {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="avatar image"
                    />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500">
                Hi! What's up
            </div>
            <div className="chat-footer">12:24</div>
            
        </div>
    )
}
