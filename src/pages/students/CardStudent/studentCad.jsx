import React, { useEffect, useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchAllStudent } from "../../../services/Student.service";


export const CardStudent = (props) => {
    const imageStyle = {
        width: '286px',
        height: '180px',
        objectFit: 'contain',
        margin: '5px',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
    };

    const CardStyle = {
        width: '18rem',
        margin: '10px',
    };

    const DescriptionStyle = {
        width: '286px',
        height: '90px',
        objectFit: 'contain',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
    };


    const { id } = fetchAllStudent();


    const [listStudents, setlistStudents] = useState([]);


    useEffect(() => {
        //Call Api
        //dry
        getStudents();
    }, [])

    const getStudents = async () => {
        let res = await fetchAllStudent();
        if (res && res.data) {
            setlistStudents(res.data)
        }
    }

    return (
        <>
            {listStudents && listStudents.length > 0 &&
                listStudents.map((item, index) => {
                    return (
                        /**
                        address
                        dateOfBirth
                        email
                        fullName
                        imageUrl
                        studentId
                         */
                        <Card key={`students-${index}`} style={CardStyle}>
                            <Card.Img style={imageStyle} variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>Name: <b>{item.fullName}</b></Card.Title>
                                <Card.Title>Birth: <b>{item.dateOfBirth}</b> </Card.Title>
                                <Card.Title>Email: <b>{item.email}</b></Card.Title>
                                <Card.Title>Address: <b>{item.address}</b></Card.Title>

                                {/* <Card.Text style={DescriptionStyle}>
                                    <b>Description: </b>

                                    {item.description}
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    );
};
