import axios from "axios"

export default async function Isauth(){
    let token=localStorage.getItem("token")
    // let user=JSON.parse(localStorage.getItem("user"))
    let is=false

   await axios.get(`${process.env.REACT_APP_BASE_URL}/auth`,
    {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }
    )
    .then(async (res)=>{
            is= await res.data.status
    })
    return is
}