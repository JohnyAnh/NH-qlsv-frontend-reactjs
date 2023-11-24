import { Modal, Button } from 'react-bootstrap';
import { deleteUser } from '../../../services/users.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete, handleDeleteTableFromModal } = props;

    const confirmDelete = async () => {
        let res = await deleteUser(dataUserDelete.userId);
        console.log("Check res cofim delete:", res);
        if (res) {
            toast.success("Succeed!");
            handleClose();
            handleDeleteTableFromModal(dataUserDelete);
        }
        else {
            toast.error("error");
            //error
        }
    }
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete a student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className='body-add-new'>
                            This action can't be undone!
                            Do you want to delete this student?
                            <br />
                            <b>Name student = {dataUserDelete.username}?</b>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => confirmDelete()}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>)
}

export default ModalConfirm;
