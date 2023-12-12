const Avtar = ({author}) => {
    if (author == 'AI'){
        return (
            <div className="w-20">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white mr-3">AI</div>
            </div>
        )
    }
    else{
        return (
            <div className="w-20">
            <   div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-blue text-sm font-semibold text-white mr-3">User</div>
            </div>
        )
    }
}

export default Avtar;