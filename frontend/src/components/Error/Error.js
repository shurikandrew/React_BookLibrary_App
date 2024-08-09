import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {clearError, selectErrorMessage} from "../../redux/slices/errorSlice";

const Error = () => {
    const errorMessage = useSelector(selectErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if(errorMessage){
            toast.info(errorMessage);
            dispatch(clearError());
        }
    }, [errorMessage, dispatch]);

    return <ToastContainer position="top-right" autoCLose={1500}></ToastContainer>;
};

export default Error;