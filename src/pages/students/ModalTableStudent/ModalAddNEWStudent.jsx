import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useState } from "react";
import { postCreateStudent } from "../../../services/Student.service";
import { toast } from 'react-toastify';
import instance from '../../../services/axios';
import { postUploadIMG } from '../../../services/Student.service';
import { useSelector } from 'react-redux';




const ModalAddNEWStudent = (props) => {
    const { show, handleClose, handleUpdateTable } = props;
    const [typeproductId, setTypeproductId] = useState("");
    const [pack, setPack] = useState({
        fullName: '',
        dateOfBirth: DataView,
        address: '',
        email: '',
        imageUrl: ''
    });
    const [file, setFile] = useState();
    const [fileUrl, setFileUrl] = useState();

    const user = useSelector(state => state.user.account);
    console.log(">>> check state addModal: ", user);

    //handleSaveStudent
    const handleSaveStudent = async (event) => {
        event.preventDefault();
        let res = await postCreateStudent(pack);
        console.log("Check res Modal Add: ", res);

        if (res) {
            handleClose();
            toast.success("A Student is created succeed!")
            handleUpdateTable({
                fullName: pack.fullName,
                dateOfBirth: pack.dateOfBirth,
                address: pack.address,
                email: pack.email,
                imageUrl: pack.imageUrl,

            })
            //success
        } else {
            toast.error("error");
            //error
        }


    };


    //Upload IMG
    const imageUrl = fileUrl ? <img src={fileUrl} width={80} /> : null;
    const uploadFile = (e) => {
        const f = e.target.files[0];
        setFile(f);
    };


    const submitUpload = async () => {
        const url = "/Uploads/image";
        const formData = new FormData();
        formData.append("image", file);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        const rs = await instance.post(url, formData, config);
        setFileUrl(rs.data);
        setPack({ ...pack, imageUrl: rs.data });
        console.log("Check data image: ", rs);

    };
    //handleChange
    const handleChange = (event) => {
        pack[event.target.name] = event.target.value;
        setPack(pack);
    };






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
                        <Modal.Title>Add new Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className='body-add-new'>

                            <div className="mb-3">
                                <label className="form-label">Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    name="fullName"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Birth</label>
                                <input type="date" className="form-control"
                                    onChange={handleChange}
                                    name="dateOfBirth"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control"
                                    onChange={handleChange}
                                    name="address"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control"
                                    onChange={handleChange}
                                    name="email"
                                    required
                                />
                            </div>
                            {/* <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <input type="text" className="form-control"
                                    onChange={handleChange}
                                    name="qty"
                                    required
                                />
                            </div> */}
                            <div className="mb-3">
                                <label className="form-label">imageUrl</label>
                                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <div display="grid" width="48%">
                                        <label htmlFor="avatar" className="form-label">
                                            Image :{imageUrl}
                                        </label>
                                        <input
                                            type="file"
                                            onChange={uploadFile}
                                            name="avatar"
                                            className="form-control"
                                            id="avatar"
                                        />
                                    </div>
                                    <button
                                        onClick={submitUpload}
                                        className="btn btn-success"
                                        type="button"
                                        style={{ marginLeft: '24px' }}
                                    >
                                        Upload
                                    </button>
                                </div>
                                {/* <input type="file" className="form-control"
                                    value={thumbnail}
                                    onChange={(event) => setThumbnail(event.target.value)}
                                /> */}
                            </div>
                            {/* <div className="mb-3">
                                <label className="form-label">SupplierId</label>
                                <input type="text" className="form-control"
                                    onChange={handleChange}
                                    name="supplierId"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">TypeproductId</label>
                                <input type="text" className="form-control"
                                    onChange={handleChange}
                                    name="typeproductId"
                                    required
                                />
                            </div> */}


                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSaveStudent}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>)
}

export default ModalAddNEWStudent;
