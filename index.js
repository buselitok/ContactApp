import {useState} from 'react'
import List from "./list.js"
import Form from "./form.js"

function Contacts() {

  //Kullanıcı kayıtlarının list altında listelenmesini istiyoruz. Fakat kayıtlar form dosyasında ve bunu listte tutacaksak önce buraya kaydediyoruz sonra da kullanabilir hale geliyor.
  const [contacts, setContacts] = useState([
    {
      fullname: "Buse Elitok",
      phoneNumber:"05678766556"
    },
    {
      fullname: "Ajda Pekkan",
      phoneNumber:"05433562398"
    }
  ])
  
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <br/>
      <List listContacts={contacts} />
      <br/>

      <Form addContact={setContacts} contacts={contacts}></Form> {/*  Contact klasörü altındaki index.js dosyasında, kayıtlarımızın tutulacağı state’i şu şekilde tanımlayabiliriz. */}
      
    </div>
  )
}

export default Contacts
