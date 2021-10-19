import React, { useState } from 'react';
import Model from 'react-model';
import Button from '../../shared/button/index';
import './style.scss';
import { Row, Col, Card, CardBody, Container } from 'reactstrap';
import home from '../../../images/home.png';
import pdetail from '../../../images/property.png';
import Map from '../../../images/map.png';
import EditIcon from '../../../images/edit.png';
import forwardIcon from '../../../images/forward.png'
import InputField from '../../shared/inputField/index';
import SelectField from '../selectField/index';
import { bottom, padding, paddingBottom } from 'styled-system';
import pic from '../../../images/pics.png';
import Table from '../table/index'
import attach from '../../../images/attachment.png'

const tableHeader = [
    '#',
    'Address',
    'Pics',
    'Status',
    'SqFt',
    'Year Built',
    'Last Sale Price',
    'Last Sale Date',
    'Distance(mi)',
    'PROPERTY TYPE',
    'BED',
    'BATH',
    '$/SqFt',
    'Lot SqFt',
    'BED'


];
const tableData = [
    {
        Address: <div style={{ color: '#4B83F0' }}>Tampa, FL, USA</div>,
        Pic: <img src={pic} />,
        Status: 'Pending',
        SellerPhone: '0',
        YearBuilt: '5/05/2021',
        LastSalePrice: '0',
        LastSaleDate: '5/05/2021',
        BED: '0',
        propertyType: 'Office Building (general)',
        Distance: '0',
        kitchen: '0',
        BATH: '0',
        SqFt: '0',
        Bed: '0',
    },
];

function Modal() {
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const options = [{ value: 'UG', label: 'UG' }, { value: 'UZ', label: 'UZ' }];

    const saleDate = [{ value: '6 months', label: '6 months' }, { value: '4 months', label: '4 months' }];
    const status = [{ value: 'Pending', label: 'Pending' }, { value: 'Active', label: 'Active' }];
    const Range = [{ value: 'Range', label: 'Range' }];

    return (
        <>
            <Row className="PropertyDetailspopup">
            <Col lg="10" >
                <Card className="compareproperty" style={{ marginLeft: '100px' }}>
                    <div className="filtersblock" style={{ paddingBottom: '80px' }}>
                        <div className="PropertyDetailsPage">
                            <Row className="topinfobar bg-white" style={{ marginBottom: '10px' }}>

                                <Col xl="1" lg="1" sm="1" md="1" xs="1" className="iconblock">
                                    <img src={home} className="homeImage" />
                                </Col>
                                <Col xl="5" lg="5" sm="11" md="5" xs="11" style={{display: 'inline'}}>
                                    <h3 className="mb-0" style={{display: 'inline-block'}}>PROPERTY DETAILS</h3>
                                    <img src={attach} style={{display: 'inline-block', padding: '5px', position: 'relative',top: '-2px'}} />
                                    <h4>5610 E Calle Mexico, Tempe, AZ, 85283-2646</h4>
                                </Col>
                                <Col xl="6" className="header_btn">
                                    <img height="26" src={forwardIcon} />
                                    <img height="26" src={EditIcon} />
                                    <Button label="Reset" />
                                    <Button label="Search" />
                                </Col>
                            </Row>
                        </div>

                        <Row className="bg-white addpadding">
                            <Col xl="6" className="propertyimage">
                                <img className="img-responsive" src={pdetail} />
                            </Col>
                            <Col xl="6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.760531451274!2d74.34038331448167!3d31.475772956493653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904273c25c31d%3A0xb731313a15a5c7dd!2sArfa%20Software%20Technology%20Parkz!5e0!3m2!1sen!2s!4v1626265335181!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    display="initial"
                                    position="relative" />
                                <div className="btnoverlay">
                                    <button className="green">Active</button>
                                    <button className="blue">Pending</button>
                                    <button className="red">Sold</button>
                                    <button className="grey">Other</button>
                                </div>

                                {/* <img className="img-responsive" src={Map} /> */}
                            </Col>
                            <Col xl="12" style={{ padding: '10px' }}>

                                <Row className="justify-content-center  filters">
                                    <h3 className="bold" style={{ paddingTop: '25px' }}>Filters</h3>
                                    <Col lg="6" md="6" sm="12" xs="12" xl="6" className="formblock" style={{ paddingRight: '40px' }}>


                                        <Row>
                                            <Col xl="3" lg="3">
                                                <h6>Beds</h6>
                                            </Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Min"
                                                    placeholder="Min"
                                                />
                                            </Col>
                                            <Col className="paddingontop divider"><hr /></Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Max"
                                                    placeholder="Max"
                                                />
                                            </Col>
                                            <Col xl="3" lg="3">
                                                <h6>Sqft</h6>
                                            </Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Min"
                                                    placeholder="Min"
                                                />
                                            </Col>
                                            <Col className="paddingontop divider"><hr /></Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Max"
                                                    placeholder="Max"
                                                />
                                            </Col>

                                            <Col xl="3" lg="3">
                                                <h6>Sale Date</h6>
                                            </Col>
                                            <Col xl="9" lg="9">
                                                <SelectField options={saleDate} placeholder="Sale Date ." />
                                            </Col>
                                            <Col xl="3" lg="3">
                                                <h6>Range</h6>
                                            </Col>
                                            <Col xl="9" lg="9">
                                                <SelectField options={Range} placeholder="Range " />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col lg="6" md="6" sm="12" xs="12" xl="6" style={{ paddingRight: '20px' }}>
                                        <Row>
                                            <Col xl="3" lg="3">
                                                <h6>Baths</h6>
                                            </Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Min"
                                                    placeholder="Min"
                                                />
                                            </Col>
                                            <Col className="paddingontop divider"><hr /></Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Max"
                                                    placeholder="Max"
                                                />
                                            </Col>

                                            <Col xl="3" lg="3">
                                                <h6>Year Built</h6>
                                            </Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Min"
                                                    placeholder="Min"
                                                />
                                            </Col>
                                            <Col className="paddingontop divider"><hr /></Col>
                                            <Col xl="4" lg="4">
                                                <InputField
                                                    label="Max"
                                                    placeholder="Max"
                                                />
                                            </Col>
                                            <Col xl="3" lg="3">
                                                <h6>Status</h6>
                                            </Col>
                                            <Col xl="9" lg="9">
                                                <SelectField options={status} placeholder="Status" />
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </div>

                    <Table tableCheckbox={true} dataCounter={false} quickActions={false} data={tableData} headData={tableHeader} />

                    <Button className="closeBtn" label={<i className="fas fa-times" />} />
                    <div className="arrowShape" />
                </Card>

            </Col>
            </Row>
        </>
    ) 

}

export default Modal;
