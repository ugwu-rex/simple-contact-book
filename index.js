const contacts = []

function addNewContact(name, phone, email) {
    contacts.push({ name, phone, email })
}

function searchByName(name) {
    return contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
}

function listContactsAlphabetically(){
    return contacts.sort((a, b) => a.name.localeCompare(b.name));
}

addNewContact('Rex', '090023430', 'me@gmail.com')
addNewContact('Alex', '0806023430', 'him@gmail.com')
addNewContact('John', '0817023430', 'us@gmail.com')
addNewContact('Sorom', '0708023430', 'we@gmail.com') // The instructions are contradictory; the first requires at least 5 contacts, whereas the last said to call the function 3 times.
addNewContact('Emilia', '0919024630', 'her@gmail.com')

console.log('All contacts:')
console.log(contacts)

console.log('\nsorted list')
console.log(listContactsAlphabetically())


console.log('\nSearch by name')
console.log(searchByName('rex'))