import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Ajout({ showthisform ,setalert, getkolipage }) {
    let [errorfile,seterrorfile]=useState(null)
    let [errorfileaudio,seterrorfileaudio]=useState(null)

    let [filename,setfilename]=useState(null)
    let [filenameaudio,setfilenameaudio]=useState(null)
    
    let [senddata,setsenddata]=useState(false)

    let checkextentionimage=(file)=>{
        let extlist =["png","jpeg","jpg"]
        let extention=file.name.split('.').pop()
        if (!extlist.includes(extention)){
         return "choisissez un fichier image"
        }
        return null
    }

    let checkextentionaudio=(file)=>{
        let extlist =["mp3", "wav", "aac", "wma", "ogg", "flac", "alac", "aiff", "m4a", "opus"]
        let extention=file.name.split('.').pop()
        if (!extlist.includes(extention)){
         return "choisissez un fichier audio"
        }
        return null
    }
    
    const { register, reset, watch, handleSubmit, formState: { errors },getValues } = useForm();

    let submit= async (data)=>{
        setsenddata(true)
        if(checkextentionimage(data.image[0])){
            return seterrorfile(checkextentionimage(data.image[0]))
        }
        if(checkextentionaudio(data.koli[0])){
            return seterrorfileaudio(checkextentionaudio(data.koli[0]))
        }
        let datas=new FormData()
        datas.append('image',data.image[0])
        datas.append('koli',data.koli[0])

        datas.append('artist_nom',data.artist_nom)
        datas.append('pays_name',data.pays_name)
        datas.append('titre',data.titre)
        
        datas.append('koli_secret_key',"sanba_gueladiegui")

        let koliname=(e)=>{
            console.log(e.target.value)
        }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/koli`,datas)
        .then( async (res)=>{
            if(res.data.success){
                reset()
                showthisform()
               await getkolipage()
                setalert({ show: true, message: "koli ajouter aces success" })
             
            }else{
                console.log(res.data)
                setalert({ show: true, message: res.data.error })
            }
        })
        .catch((error)=>{
            // seterror("erreur lors de la connection")
            console.log(error)
        })
        setsenddata(false)
    }
    let koliname=(e)=>{
        console.log(e)
    }
    return (
        <div class="modal fade show" style={{ display: "block" }} id="modalForm">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Koli</h5>
                        <a style={{ cursor: "pointer" }} onClick={showthisform} class="close" data-bs-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z" /></svg>
                        </a>
                    </div>
                    <div class="modal-body">
                        <form action="#" class="form-validate is-alter" encType="multipart/form-data" onSubmit={handleSubmit(submit)}>
                            <h5 className="card-title mb-3">Artist</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label class="form-label" for="default-01">Nom complet</label>
                                        {errors.artist_nom && <p className="text-danger">{errors.artist_nom.message}</p>}
                                        <div class="form-control-wrap">
                                            <input type={"hidden"} value="sanba_gueladiegui" {...register("koli_secret_key")}/>
                                            <input type="text" class="form-control" id="default-01"  {...register("artist_nom", { required: "veiller entrer le nom" })} placeholder="nom" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="default-06">Pays</label>
                                        <div class="form-control-wrap ">
                                        {errors.pays_name && <p className="text-danger">{errors.pays_name.message}</p>}
                                            <div class="form-control-select">
                                                <select class="form-control" {...register("pays_name")} id="default-06">
                                                    <option value="senegal">Sénégal</option>
                                                    <option value="Guinee">Guinée</option>
                                                    <option value="mali">Mali</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="default-06">Image</label>
                                        {errorfile ?<p className="text-danger"> {errorfile}</p>:null} 
                                        {errors.image && <p className="text-danger">{errors.image.message}</p>}
                                        <div class="form-control-wrap">
                                            <div class="form-file">
                                                <input type="file" class="form-control" id="customFile"  {...register("image",{required:"Choisissez une image"})} />
                                                <label  for="customFile">{filename}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 className="card-title mb-3 mt-3" >Information koli</h5>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="default-06">koli</label>
                                         {errorfileaudio ?<p className="text-danger"> { errorfileaudio }</p>:null} 
                                         {errors.koli && <p className="text-danger">{errors.koli.message}</p>}
                                        <div class="">
                                            <div class="">
                                                <input type="file" class="form-control" id="customFile" onChange={koliname} {...register("koli",{required:"Choisissez un koli"})} />
                                                <label  for="customFile">{filenameaudio}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label class="form-label" for="default-01">Titre koli</label>
                                        {errors.titre && <p className="text-danger">{errors.titre.message}</p>}
                                        <div class="form-control-wrap">
                                            <input type="text" class="form-control" id="default-01"  {...register("titre", { required: "Titre du koli" })} placeholder="nom" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-end">
                                <button type="submit" disabled={senddata} className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}