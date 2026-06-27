# Contact Manager

A simple JavaScript contact manager built with array, object and functions.

## What it does

- Add new contacts (name, phone, email)
- List all contacts sorted alphabetically
- Search for a contact by name (case-insensitive)


## Functions

**`addNewContact(name, phone, email)`** - pushes a new contact object into the contacts array.

**`listContactsAlphabetically()`** - returns the contacts sorted alphabetically.

**`searchByName(name)`** - finds and returns a contact by name, ignoring case.

## Example output

```
All contacts:
[ { name: 'Rex', phone: '090023430', email: 'me@gmail.com' }, ... ]

Sorted list:
[ { name: 'Alex', ... }, { name: 'Emilia', ... }, ... ]

Search by name:
{ name: 'Rex', phone: '090023430', email: 'me@gmail.com' }
```