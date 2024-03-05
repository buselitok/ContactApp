import {useState} from 'react'

function Form({ addContact,contacts }) {

    const initialsetValue={ fullname: "", phoneNumber: "" }
    const [form, setForm] = useState(initialsetValue)
    
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phoneNumber === "") {
            return false; //formu gönderme işlemi durdur
        }

        addContact([...contacts, form])
        console.log(form)
        setForm(initialsetValue); //add butonunua basıldıktantan sonra yazılanlar kaydedilir ve input yerleri silinir
    }


    return (
        <form onClick={onSubmit}>
            <div>
                <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput}></input>
            </div>
            <div>
                <input name='phoneNumber' placeholder='Phone Number' value={form.phoneNumber} onChange={onChangeInput}></input>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
