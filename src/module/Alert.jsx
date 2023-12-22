import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Alert = async (props) => {
     Swal.fire({
    icon: props.aksi,
    title: props.judul,
    text: props.deskripsi,
  });
};

export default Alert;