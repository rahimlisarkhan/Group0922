import { useState } from "react"
import { isEmailValid } from "../../helpers/regex"




export const ProductForm = () => {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [price, setPrice] = useState("0")
    


    console.log("rendering...");
    

    const handleSubmit = () => {

        //Validation
        if(fullname.length < 3){
            alert("Fullname must be at least 3 characters long")
            return
        }

        if(isEmailValid(email) == false){
            alert("Email must be valid")
            return
        }

        if(price <= 0){
            alert("Price must be greater than 0")
            return
        }

        const data = {
            fullname,
            email,
            price
        }

        console.log("data",data); // Fetch API

        setFullname('')
        setEmail('')
        setPrice("0")
    }

    return <div>
        <h1>
            Product Form
        </h1>

        <hr/>
        <div>
            <label>
                Fullname
            </label>
            <input value={fullname} onChange={(e) => setFullname(e.target.value)} />
        </div>
        <div>
            <label>
                Email
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>
                Price
            </label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <button onClick={handleSubmit}>
            Submit
        </button>
    </div>
}