import React, { useState , useEffect} from 'react';
import Modal from 'react-modal';
import StarRating from '../StarRating/StarRating';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

const AddMovie = ({handleAdd}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);

    useEffect(() => {
      clearForm();
    }, [modalIsOpen]);

    const [form, setForm] = useState({
      name:"",
      image:"",
      date:"",
      rating:"",
    });
    function clearForm() {
      setForm({
        name: "",
        image: "",
        date: "",
        rating: 1,
      });
    };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
 
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }
 const handleChange = (e)=>{
   setForm({...form,[e.target.name]:e.target.value})
 };
 const handleRate = (rate) => setForm({ ...form, rating: rate });
    return (
        <div>
            <button className="btn add-movie-btn" onClick={openModal}>Add Movie</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <form onSubmit={(event) => {
            event.preventDefault();
            let newMovie = {
              ...form,
              id: Math.random(),
            };
            handleAdd(newMovie);
            closeModal();
          }}
                >
                    <h2>Add Movies</h2>
                    <label>Name</label>
                    <input type="text" value={form.name} name="name" onChange={handleChange} required/>
                    <label>Date Of Release</label>
                    <input type="date" value={form.date} name="date" onChange={handleChange} required/>
                    <label>Rate</label>
                    <StarRating rate={form.rating} handleRate={handleRate}/>
                    <label>Image URL</label>
                    <input type="url" value={form.image} name="image" onChange={handleChange} required/>
                    <div>
                    <button className="btn btn-primary" type="submit">
                      Add Movie
                    </button>
                    <button className="btn btn-danger" onClick="closeModal">Cancel</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddMovie
