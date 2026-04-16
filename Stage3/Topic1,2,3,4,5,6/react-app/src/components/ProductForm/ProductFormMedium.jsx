import { useState } from "react"
import { isEmailValid } from "../../helpers/regex"



const initialFormState = {
    fullname: '',
    email: '',
    price: "0"
}

export const ProductForm = () => {

    const [form, setForm] = useState(initialFormState)


    const handleChange = (e) => {
        const { name } = e.target

        let value = e.target.value

        if(name === "price" && (parseFloat(value) <= 0 || isNaN(value))){
            value = 0
        }

        const newForm = {
            ...form,
            [name]: value
        }

        setForm(newForm)
    }

    const handleSubmit = () => {

        //Validation
        if(form.fullname.length < 3){
            alert("Fullname must be at least 3 characters long")
            return
        }

        if(isEmailValid(form.email) == false){
            alert("Email must be valid")
            return
        }

        if(+form.price <= 0){
            alert("Price must be greater than 0")
            return
        }


        console.log("form",form); // Fetch API

        setForm(initialFormState)
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
            <input value={form.fullname} name="fullname" onChange={handleChange} />
        </div>
        <div>
            <label>
                Email
            </label>
            <input value={form.email} name="email" onChange={handleChange} />
        </div>
        <div>
            <label>
                Price
            </label>
            <input value={form.price} name="price" onChange={handleChange} />
        </div>

        <button onClick={handleSubmit}>
            Submit
        </button>
    </div>
}



// const name = "fullname"

// const myObj = {
//     fullname: "John Doe",
//     email: ""
// }


// const newObj = {
//     ...myObj,
//     [name]: "Marry Doe",
// }

// // myObj.fullname = "Marry Doe"
// // myObj["fullname"] = "Marry Doe"
// // myObj[name] = "Marry Doe"


// console.log(myObj);
// console.log(newObj);
