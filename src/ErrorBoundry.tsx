import React from "react";

class ErrorBoundry extends React.Component<errorBoundryProps, errorBoundaryState>
{
    constructor(props:errorBoundryProps){
        super(props)
        this.state = {hasError:false, message:''}
    }

    static getDerivedStateFromError(error:any){
        return {hasError:true, message:error}
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error);
    }

    render() {
        if(this.state.hasError){
            if(this.props.errorUI){
                return this.props.errorUI;
            }else{
                return <h3>{this.state.message}</h3>
            }
        }else{
            return this.props.children
        }
    }
}

interface errorBoundryProps{
    errorUI?:React.ReactNode,
    children: React.ReactNode,
}

interface errorBoundaryState{
    hasError:boolean,
    message:string
}

export default ErrorBoundry;