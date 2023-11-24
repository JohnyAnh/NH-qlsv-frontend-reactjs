import { fetchAllStudentAD } from '../../services/Student.service';
import React from "react";
import ModalAddNEWStudent from './ModalTableStudent/ModalAddNEWStudent';
import ModalEditStudent from './ModalTableStudent/ModalEditStudent';
import ModalConfirm from './ModalTableStudent/ModalConfirm';
import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import _ from "lodash";

export const ListStudent = (props) => {
    const [listStudents, setListStudents] = useState([]);

    useEffect(() => {
        //Call Api
        //dry
        getStudents();

    }, [])

    const getStudents = async () => {
        try {
            let res = await fetchAllStudentAD();

            if (res && res.data) {
                // Thêm cột số thứ tự vào mỗi đối tượng trong mảng
                const studentsWithIndex = res.data.map((student, index) => ({
                    ...student,
                    stt: index + 1,
                }));

                // Lưu trữ dữ liệu vào state
                setListStudents(studentsWithIndex);
            }
        } catch (error) {
            console.error('Error fetching students: ', error);
        }
    };

    const [isshowModalAddNewProduct, setIsshowModalAddNewStudent] = useState(false);

    const [isshowModalEditStudent, setIsShowModalEditStudent] = useState(false);
    const [dataStudentEdit, setDataStudentEdit] = useState({});

    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataStudentDelete, setDataStudentDelete] = useState({});

    const handleClose = () => {
        setIsshowModalAddNewStudent(false);
        setIsShowModalEditStudent(false);
        setIsShowModalDelete(false);
    }

    const handleUpdateTable = (students) => {
        setListStudents([students, ...listStudents])
    }

    const handleEditStudent = (students) => {
        setDataStudentEdit(students);
        // console.log("Checkk data:", products);
        setIsShowModalEditStudent(true);
    }

    const handleEditTableFromModal = (students) => {
        let cloneListStudents = _.cloneDeep(listStudents);
        let index = listStudents.findIndex(item => item.studentId === students.studentId);

        // Kiểm tra xem sinh viên có tồn tại trong mảng không
        if (index !== -1) {
            // Nếu tồn tại, thực hiện chỉnh sửa
            cloneListStudents[index].fullName = students.fullName;
            setListStudents(cloneListStudents);
        } else {
            console.error(`Student with ID ${students.studentId} not found in listStudents.`);
        }
    }
    const handleDeleteStudent = (students) => {
        setIsShowModalDelete(true);
        // console.log("Check datadelete: ", products);
        setDataStudentDelete(students);
    }

    const handleDeleteTableFromModal = (students) => {
        let cloneListStudents = _.cloneDeep(listStudents);
        cloneListStudents = cloneListStudents.filter(item => item.studentId !== students.studentId);
        setListStudents(cloneListStudents);

    }



    console.log("<<<Check listdata: ", listStudents);
    return (<>

        <Container>
            <div className="btn-list flex-nowrap" style={{ justifyContent: "space-between" }}>
                <span><b>List Students:</b></span>
                <button
                    className="btn"
                    style={{ marginLeft: "10px" }}
                    onClick={() => setIsshowModalAddNewStudent(true)}
                >
                    Add new
                </button>
            </div>



            <body>
                <script src="./dist/js/demo-theme.min.js?1684106062"></script>
                <div className="page-wrapper">
                    <div class="container-xl">
                        <div class="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="table-responsive">
                                        <table className="table table-vcenter table-mobile-md card-table">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>DateOfBirth</th>
                                                    <th>Address</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                    <th className="w-1"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listStudents && listStudents.length > 0 &&
                                                    listStudents.map((item, index) => {
                                                        // console.log("Check DataTable Item:", item.id)
                                                        return (
                                                            <tr key={`students-${index}`}>

                                                                <td ddata-label="numbercount">
                                                                    {item.stt}

                                                                </td >
                                                                <td data-label="img">
                                                                    <span className="avatar me-2" style={{ backgroundImage: `url('${item.imageUrl}')` }}></span>

                                                                    {/* <span className="avatar me-2" style={{ backgroundImage: `url('https://localhost:7132/uploads/5155ccde-5819-4709-9066-bd6a8c2eaa45IMG_9573.jpeg')` }}></span> */}
                                                                </td>

                                                                <td data-label="Name">
                                                                    <div className="d-flex py-1 align-items-center">
                                                                        <div className="flex-fill">
                                                                            <div className="font-weight-medium">{item.fullName}</div>

                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td data-label="Birth">
                                                                    <div>2{item.dateOfBirth}</div>
                                                                    {/* <div className="text-muted">Business Development</div> */}
                                                                </td>
                                                                <td className="text-muted" data-label="Address">
                                                                    {item.address}
                                                                </td>
                                                                <td className="text-muted" data-label="Email">
                                                                    {item.email}
                                                                </td>

                                                                <td>
                                                                    <div className="btn-list flex-nowrap" style={{ justifyContent: "center" }}>
                                                                        <button href="#" className="btn" style={{ marginLeft: "10px" }}
                                                                            onClick={() => handleEditStudent(item)}
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                        <button href="#" className="btn"
                                                                            onClick={() => handleDeleteStudent(item)}
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    </div>

                                                                </td>

                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="./dist/js/tabler.min.js?1684106062" defer></script>
                <script src="./dist/js/demo.min.js?1684106062" defer></script>
            </body>
        </Container>

        <ModalAddNEWStudent
            show={isshowModalAddNewProduct}
            handleClose={handleClose}
            handleUpdateTable={handleUpdateTable}

        />

        <ModalEditStudent
            show={isshowModalEditStudent}
            dataStudentEdit={dataStudentEdit}
            handleClose={handleClose}
            handleEditTableFromModal={handleEditTableFromModal}

        />
        <ModalConfirm
            show={isShowModalDelete}
            handleClose={handleClose}
            dataStudentDelete={dataStudentDelete}
            handleDeleteTableFromModal={handleDeleteTableFromModal}


        />


    </>)

}