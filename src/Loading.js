import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({text}) => {
    return (
        <div className="loading">
            <p>{text}</p>
            <SyncLoader color={'#fffaf0'} loading={true} speedMultiplier={0.5} size={7}/>
        </div>
    )
}

export default Loading;