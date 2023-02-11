import { error } from "console";
import { useFormikContext } from "formik";
import React from "react";
import { ChangeEvent } from "react"
import { string } from "yup";

export default function ImageField(props:imageFIeldProps){
    const [imageBase64,setImageBase64] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState(props.imagrUrl);
    const {values} = useFormikContext<any>();
    const divStyle = {marginTop:'10px'};
    const imgStyle = {width:'450px'};


    const handleOnChange = (eventArgs:ChangeEvent<HTMLInputElement>)=>{
        if(eventArgs.currentTarget.files){
            const file = eventArgs.currentTarget.files[0];
            if(file){
                toBase64(file).then((base64Representation:string)=>setImageBase64(base64Representation))
                    .catch(error=>console.error(error));
                values[props.field] = file;
                setImageUrl('');
            }else{
                setImageBase64('');
            }
        }
    }

    const toBase64 = (file:File)=>{
        return new Promise<string>((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = ()=>resolve(reader.result as string);
            reader.onerror = error=>reject(error);
        })
    }
    return(
        <div className="mb-3">
            <label>{props.displayName}</label>
            <div>
                <input type='file' accept=".jpg,.jpeg,.png" onChange={handleOnChange} />
            </div>
            {imageBase64 ?
                <div style={divStyle}>
                    <img style={imgStyle} src={imageBase64} alt="Selected Image" />
                </div>:null}
            
            {imageUrl ?
                <div style={divStyle}>
                    <img style={imgStyle} src={imageUrl} alt="Selected Image" />
                </div>:null}
        </div>
    )
}

interface imageFIeldProps{
    displayName:string,
    imagrUrl?:string,
    field:string
}

ImageField.defaultProps={
    ImageField:'',
}