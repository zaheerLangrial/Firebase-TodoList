import React from 'react'

function SearchAndAdd({setMudal , contacts , setContacts}) {
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    const filterCont = contacts.filter((cont) => cont.name.toLowerCase().includes(inputValue.toLowerCase()))
    setContacts(filterCont)

  }
  return (
    <div className=' w-full flex flex-col space-y-3 justify-center items-center py-5'>
            <input onChange={handleSearch} type="text" className='border outline-none py-1 px-1' placeholder='Contact Search'/>
            <button onClick={() => setMudal(true)} className=' bg-blue-500 px-3 py-1.5 text-white rounded-md'>Add New Contact</button>
    </div>
  )
}

export default SearchAndAdd