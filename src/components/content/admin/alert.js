import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Alerted({setalert,alert}){
    useEffect(()=>{
        setInterval(()=>{
            setalert({show:false,message:"",error:false})
        },3000)
    })
    return(
    <div class="modal fade show" tabindex="-1" style={{display: "block "}} id="modalAlert">
        <div class="modal-dialog modal-dialog-top" role="document">
            <div class="modal-content">
                <div class="modal-body modal-body-lg text-center">
                    <div class="nk-modal">
                        {
                            !alert.error?
                        <>
                            <em class="nk-modal-icon icon icon-circle icon-circle-xxl bg-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24"><g id="evaCheckmarkFill0"><g id="evaCheckmarkFill1"><path id="evaCheckmarkFill2" fill="currentColor" d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z"/></g></g></svg>
                            </em>
                            <h4 class="nk-modal-title">Congratulations!</h4>
                        </>
                            :
                        <>
                            <em class="nk-modal-icon icon icon-circle icon-circle-xxl bg-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z"/></svg>
                            </em>
                            <h4 class="nk-modal-title">Erreur!</h4>
                          </>
                        }
                        <div class="nk-modal-text">
                            <div class="caption-text">{alert.message}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}