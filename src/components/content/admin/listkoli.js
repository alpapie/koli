import axios from "axios";
import React, { useEffect ,useState} from "react";
import Isauth from "../../utils/isauth";
import Ajout from "./addkoli";
import Alerted from "./alert";
import Popup from "./popup";

export default function Listkoli({setauth}) {
    let [kolidji, setkolidji] = useState([])
    let [page, setpage] = useState(1)
    let [showform, setshowform] = useState(false)

    let [alert, setalert] = useState({show:false,message:null,error:false})
    let [popup, setpopup] = useState({is:false,id:null})

    let [pagination, setpagination] = useState([])
   
    let getkolipage = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/koli/pagination/page/${page}`).then(async (res) => {
            // setpage(res.data.meta.current_page + 1)
            setkolidji(res.data.data)
             let listpage=[]
            for (let i = 0; i < res.data.meta.last_page; i++) {
                listpage.push(<li class={res.data.meta.current_page-1==i?"page-item active":"page-item"}><a class="page-link" style={{cursor:'pointer'}} onClick={nextpage.bind(this,i)}>{i+1}</a></li>)
            }     
        setpagination(listpage)
        }).catch((error) => {
            console.log(error)
        })
    }
    let nextpage=async (index)=>{
        setpage(index+1)
    }
    let deleted=(id)=>{
        setpopup({is:true,id:id})
    }
    let letdata=async() => {
        setauth(await Isauth())
        getkolipage()
    }
    async function showthisform(){
       setshowform(!showform)
    }
    useEffect( ()=>{
        letdata()
    } ,[])
    useEffect(() => {
        getkolipage()
    }, [page])
    // useEffect(()=>{
    //     for (let i = 0; i < lastpage; i++) {
    //         listpage.push(<li class={page-1==i?"page-item active":"page-item"}><a class="page-link" style={{cursor:'pointer'}} onClick={nextpage.bind(this,i)}>{i+1}</a></li>)
    //     }     
    // setpagination(listpage)
    // },[lastpage])
    return (
         <>
            <main class="main">
                <div className="nk-body bg-lighter npc-default has-sidebar no-touch nk-nio-theme">
		            <div class="container-fluid">
                        <div class="nk-content ">
                            <div class="container-fluid">
                                <div class="nk-content-inner">
                                    <div class="nk-content-body">
                                        <div class="nk-block-head nk-block-head-sm">
                                            <div class="nk-block-between">
                                                <div class="nk-block-head-content">
                                                    <h3 class="nk-block-title page-title">Listes Kolis</h3>
                                                    <div class="nk-block-des text-soft">
                                                        <p>Total Kolis.</p>
                                                    </div>
                                                </div>
                                                <div class="nk-block-head-content">
                                                    <div class="toggle-wrap nk-block-tools-toggle">
                                                        <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1" data-target="more-options"><em class="icon ni ni-more-v"></em></a>
                                                        <div class="toggle-expand-content" data-content="more-options">
                                                            <ul class="nk-block-tools g-3">
                                                                <li>
                                                                    <div class="form-control-wrap">
                                                                        <div class="form-icon form-icon-right">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"></path></svg>
                                                                        </div>
                                                                        <input type="text" class="form-control" id="default-04" placeholder="Search by name" />
                                                                    </div>
                                                                </li>
                                                                <li class="nk-block-tools-opt">
                                                                    <a href="#" class="btn btn-icon btn-primary d-md-none"><em class="icon ni ni-plus"></em></a>
                                                                    <a style={{cursor:"pointer"}} onClick={showthisform} class="btn btn-primary d-none d-md-inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg><span>Add</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nk-block">
                                            <div class="nk-tb-list is-separate mb-3">
                                                <div class="nk-tb-item nk-tb-head">
                                                    <div class="nk-tb-col nk-tb-col-check">
                                                        <div class="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" class="custom-control-input" id="uid" />
                                                            <label class="custom-control-label" for="uid"></label>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col"><span class="sub-text">Artist</span></div>
                                                    <div class="nk-tb-col tb-col-mb"><span class="sub-text">Titre</span></div>
                                                    <div class="nk-tb-col tb-col-md"><span class="sub-text">Pays</span></div>
                                                    <div class="nk-tb-col tb-col-lg"><span class="sub-text">Action</span></div>
                                                    
                                                </div>
                                                {
                                                    kolidji.map((koli)=>(
                                                    <div class="nk-tb-item" key={koli.id}>
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input" id="uid1" />
                                                                <label class="custom-control-label" for="uid1"></label>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col">
                                                            <a href="html/ecommerce/customer-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar">
                                                                    <img src={process.env.REACT_APP_BASE_URL + koli.artist.image} alt={koli.artist.artist_nom} />                                                                </div>
                                                                    <div class="user-info">
                                                                        <span class="tb-lead">{koli.artist.artist_nom}<span class="dot dot-success d-md-none ms-1"></span></span>
                                                                        {/* <span>info@softnio.com</span> */}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-mb">
                                                            <span class="tb-amount">{koli.titre}</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md">
                                                            <span>{koli.pays.pays_name}</span>
                                                        </div>
                                                        
                                                        <div class="nk-tb-col tb-col-md d-flex justify-content-center">
                                                            <span class="tb-status text-danger" style={{cursor:'pointer'}} onClick={deleted.bind(this,koli.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h245.8c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg> <i class="fas fa-trash-alt"></i>
                                                            </span>
                                                            <span class="tb-status text-primary ml-3" style={{cursor:'pointer'}}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"/></svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    ))
                                                    
                                                }
                                            </div>
                                            <div class="card">
                                                <div class="card-inner">
                                                    <div class="nk-block-between-md g-3">
                                                        <div class="g">
                                                            <ul class="pagination justify-content-center justify-content-md-start">
                                                                <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                                                                {
                                                                    pagination.map((page)=>(
                                                                        page
                                                                    ))
                                                                }
                                    
                                                                {/* <li class="page-item"><span class="page-link"><em class="icon ni ni-more-h"></em></span></li> */}
                                                            
                                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showform?<Ajout showform={showform} showthisform={showthisform} setshowform={setshowform} setalert={setalert} getkolipage={getkolipage} />:null}
                    {popup.is?<Popup popup={popup} setpopup={setpopup} setalert={setalert} getkolipage={getkolipage} />:null}
                    {alert.show? <Alerted alert={alert} setalert={setalert}/> :null}
                </div>
            </main>
        </>
    )
}