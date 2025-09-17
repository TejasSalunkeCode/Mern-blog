export const errorHandler=(statuscode,messgae)=>{
    const error= new Error();
    error.statuscode=statuscode;
    error.message=messgae;
    return error;
}