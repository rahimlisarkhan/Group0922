


export const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return regex.test(email)
}


export const isPasswordValid = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    return regex.test(password)
}


export const isWebsiteValid = (website) => {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/

    return regex.test(website)
}

export const isAzerbaijaniPhoneNumberValid = (phoneNumber) => {
    const regex = /^(?:\+994|0)(?:50|51|55|70|77|60|99|10|12)\d{7}$/

    return regex.test(phoneNumber)
}





// const phoneRegex = /^(?:\+994|0)(?:50|51|55|70|77|60|99|10|12)\d{7}$/

// html.matchAll(phoneRegex) // Returns an iterator of all matches in the HTML string 


