const getRandomLetter = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let random = Math.floor(Math.random() * alphabet.length)
    return alphabet[random]
}

const getRandomNumber = () => {
    let numbers = '123456789'
    let random = Math.floor(Math.random() * numbers.length)
    return numbers[random]
}

const getRandomSymbol = () => {
    let symbols = '@!#$%&*?/'
    let random = Math.floor(Math.random() * symbols.length)
    return symbols[random]
}

const generatePassword = (number = false, symbol = false, length) => {
 
    let setItems = [getRandomLetter]

    setItems = number ? [...setItems, getRandomNumber] : setItems;
    setItems = symbol ? [...setItems, getRandomSymbol] : setItems;

    let password = []
    
    for(let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * setItems.length) 
        let characters = setItems[random]()
        password.push(characters)
    }

    return password.join('')
}

export default generatePassword