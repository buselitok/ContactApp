import {useState} from 'react'

function List({ listContacts }) {
  const [filterText, setFilterText] = useState("")
  
  const onChangeFilter = (e) => {
    setFilterText(e.target.value)
  }
  //filter metodu çalıştığında aradığımız array elemanı bize verecek
  const filtered = listContacts.filter((item) => {

  //Bize gönderilmiş olan veri string gönderilmemiş olabilir bunu string’e çevirelim. Bunun için “toString( )” metodunu kullanalım.
  //Filtreleme işlemi yaparken küçük büyük harf problemi yaşamamak için “toLowerCase()” metodunu kullanalım.
  //Bize gelen verinin “filterTex”t içerisinde var olup olmadığını kontrol etmek için  “includes” metodundan yararlanalım.
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })
  

  return (
    <div>
      <input placeholder='Filter Contact' value={filterText} onChange={onChangeFilter}></input>
      <ul className='list'>
        {/*Filtrelenmiş arraylerin içerisinde gezer ve listeler*/}
        {filtered.map((contact, i) => (   
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}
export default List
