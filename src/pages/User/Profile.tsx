import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { UserForm } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../App";


export function Profile() {
   const context = useContext(AppContext);

    if (!context) 
        throw new Error("Profile must be used inside AppContext.Provider");

    const { setUsername } = context;

    function putusername(e:ChangeEvent<HTMLInputElement>){
        setUsername(e.target.value)
    }

    return (
        <>
            <UserForm></UserForm>
            <div className="text-center">
                <input type="text" onChange={putusername} />
            </div>
        </>
    )
}

export default Profile;