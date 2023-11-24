import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { putUpdateStudents } from "../../../services/Student.service";
import { toast } from 'react-toastify';


// fullName, dateOfBirth, address, email, imageUrl 

const ModalEditStudent = (props) => {
    const { show, handleClose, dataStudentEdit, handleEditTableFromModal } = props;
    const [studentId, setStudentId] = useState("");
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const handleEditStudent = async () => {
        let res = await putUpdateStudents(studentId, fullName, dateOfBirth, address, email, imageUrl);
        if (res) {
            handleEditTableFromModal({
                studentId: studentId,
                fullName: fullName,
                dateOfBirth: dateOfBirth,
                address: address,
                email: email,
                imageUrl: imageUrl,
            })
            handleClose();
            toast.success("A Student is edited succeed!")
            //success
        } else {
            toast.error("error");
            //error
        }
    }

    useEffect(() => {
        if (show) {
            setStudentId(dataStudentEdit.studentId);
            setFullName(dataStudentEdit.fullName);
            setDateOfBirth(dataStudentEdit.dateOfBirth);
            setAddress(dataStudentEdit.address);
            setEmail(dataStudentEdit.email);
            setImageUrl(dataStudentEdit.imageUrl);

        }
    }, [dataStudentEdit])


    console.log("Check props: ", dataStudentEdit);


    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >

                    <Modal.Header closeButton>
                        <Modal.Title>Edit Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className='body-add-new'>

                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={fullName}
                                    onChange={(event) => setFullName(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">dateOfBirth</label>
                                <input type="Date" className="form-control"
                                    value={dateOfBirth}
                                    onChange={(event) => setDateOfBirth(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">address</label>
                                <input type="text" className="form-control"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">email</label>
                                <input type="email" className="form-control"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="text" className="form-control"
                                    value={imageUrl}
                                    onChange={(event) => setImageUrl(event.target.value)}
                                />
                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => handleEditStudent()}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>)
}

export default ModalEditStudent;
