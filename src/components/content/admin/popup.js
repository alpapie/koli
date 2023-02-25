import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Popup({ popup, setpopup, setalert, getkolipage }) {

    let HandlerDelete = async (id) => {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/admin/${id}`).then(async (res) => {
            // setpage(res.data.meta.current_page + 1)
            if(res.data.success){
               
                setpopup({is:false,id:null})
                await getkolipage()
                await setalert({show:true,message:"koli supprime avec success"})
            }else{
                setalert({show:true,message:"erreur for de la supression",error:true})
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    function handleClose() {
        setpopup({ is: false, id: null })
    }
    return (
        <>
            {/* <Modal show={popup.is} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Suppression</Modal.Title>
                </Modal.Header>
                <Modal.Body>Voulez vous vraiment suprimer ce Koli</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Non
                    </Button>
                    <Button variant="danger" onClick={HandlerDelete.bind(this, popup.id)}>
                        Oui
                    </Button>
                </Modal.Footer>
            </Modal> */}
            <div class="modal fade zoom show" style={{display:"block"}} tabIndex="-1"  >
            <div class="modal-dialog modal-dialog-top" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Suppression Koli</h5>
                            <a style={{cursor:"pointer"}} class="close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z"/></svg>
                            </a>
                        </div>
                        <div class="modal-body">
                            <p>Voulez vous vraiment suprimer ce Koli</p>
                        </div>
                        <div class="modal-footer bg-light">
                            <Button variant="secondary" onClick={handleClose}>
                                Non
                            </Button>
                            <Button variant="danger" onClick={HandlerDelete.bind(this, popup.id)}>
                                Oui
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}