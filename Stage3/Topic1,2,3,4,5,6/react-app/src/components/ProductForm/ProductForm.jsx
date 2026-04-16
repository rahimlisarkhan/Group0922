import { useFormik } from 'formik';
import { isEmailValid } from '../../helpers/regex';
import { FormField } from '../FormField';
import { ButtonCustom } from '../ButtonCustom';
// import { useEffect } from 'react';

const initialFormState = {
    fullname: '',
    email: '',
    price: "0"
}

export const ProductForm = () => {

    const formik = useFormik({
        initialValues: initialFormState,
        // validationSchema: {
        //     fullname: (value) => {
        //         if(value.length < 3){
        //             return "Fullname must be at least 3 characters long"
        //         }
        //     },
        //     email: (value) => {
        //         if(isEmailValid(value) == false){
        //             return "Email must be valid"
        //         }
        //     },
        //     price: (value) => {
        //         if(+value <= 0){
        //             return "Price must be greater than 0"
        //         }
        //     }
        // },
        validate: (values) => {
            const errors = {}

            if(values.fullname.length < 3){
                errors.fullname = "Fullname must be at least 3 characters long"
            }

            if(isEmailValid(values.email) == false){
                errors.email = "Email must be valid"
            }

            if(+values.price <= 0){
                errors.price = "Price must be greater than 0"
            }

            return errors
        },
        
        onSubmit: (values,options) => {
            console.log("form", values); // Fetch API
            console.log("options",options);

            options.resetForm() // Reset form to initial state
            
        },
    });

  

    // useEffect(()=>{

    //     // document.title =  "Asef Form"

    //         // inputRef.current.focus()

    //     window.addEventListener("mousemove",function(e){
    //         console.log("mousemove...", e);

    //         // input.current.focus()
    //     })

    // },[])

    return <div>
        <h1>
            Product Form
        </h1>

        <hr/>
        <FormField
            label="Fullname"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            error={formik.errors.fullname}
        />
        <FormField
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
        />
        <FormField
            label="Price"
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.errors.price}
        />

        <ButtonCustom onClick={formik.handleSubmit}>
            Submit
        </ButtonCustom>
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
