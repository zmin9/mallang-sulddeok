import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({text}) => {
    return (
        <div className="loading">
            <p>{text}</p>
            <SyncLoader color={'#f0f8ff'} loading={true} speedMultiplier={0.5} size={7}/>
        </div>
    )
}

export default Loading;