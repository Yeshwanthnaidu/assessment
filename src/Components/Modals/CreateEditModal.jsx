import React, { useState } from "react";
import { Modal, Form, Row, DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import Dropzone from "react-dropzone";
import { CiMemoPad } from "react-icons/ci";
import { TiDocumentAdd } from "react-icons/ti";


const CreateEditModal = (props) => {
    const { setShowCreateEditModal, contextMenuData, handleSetData } = props

    const [name, setName] = useState(contextMenuData?.name || '');
    const [description, setDescription] = useState(contextMenuData?.description || '');
    const [topicDocument, setTopicDocument] = useState(contextMenuData?.topic_document || null);
    const [levelOfDifficuilty, setLevelOfDifficuilty] = useState(contextMenuData?.level_of_difficulty || 'easy');
    const [noOfQuestions, setNoOfQuestions] = useState(contextMenuData?.no_of_questions || '');
    const [passingCriteria, setPassingCriteria] = useState(contextMenuData?.passing_criteria);

    const handleSubmit = () => {
        const data = {
            id: contextMenuData?.id,
            name,
            description,
            topic_document: topicDocument,
            level_of_difficulty: levelOfDifficuilty,
            no_of_questions: noOfQuestions,
            passing_criteria: passingCriteria,
        }

        handleSetData(data);
        setShowCreateEditModal(false)
    }

    return <Modal show={true} size="xl">
        <Modal.Header style={{ color: '#CC0126' }}>
            <Modal.Title>
                <span className="fs-1 px-4 d-flex" style={{ gap: '1rem' }}>
                    <CiMemoPad size={"4rem"} style={{ transform: 'rotate(-0.1turn)' }} />
                    Create
                </span>
                <span className="fs-1 px-4 d-block">
                    Assessment
                </span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{ color: '#CC0126' }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Assessment Name</Form.Label>
                    <Form.Control type="email" onChange={(e) => setName(e.target.value)} value={name || ''} style={{ border: '1px solid #CC0126' }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="email" onChange={(e) => setDescription(e.target.value)} value={description || ''} style={{ border: '1px solid #CC0126' }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Topic Document</Form.Label>
                    <div className="m-1 p-5 d-flex justify-content-center" style={{ border: '2px dashed #CC0126', borderRadius: '1rem' }}>
                        <Dropzone multiple={false} accept="application/pdf" onDrop={acceptedFiles => { setTopicDocument(acceptedFiles[0]) }}>
                            {({ getRootProps, getInputProps }) => (
                                <section className="drop-box" accept={["pdf"]}>
                                    <div {...getRootProps()} className="drop-icon d-flex flex-column align-items-center">
                                        <input {...getInputProps()} />
                                        <TiDocumentAdd size={'2rem'} />
                                        {topicDocument?.path ? <p>{topicDocument?.path || ''}</p> : <p><u>Click to Upload</u> or Drag and Drop</p>}
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                </Form.Group>
                <div className="d-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                    <Form.Group className=" mb-3 d-flex flex-column">
                        <Form.Label>Level of Difficuilty</Form.Label>
                        <DropdownButton
                            as={ButtonGroup}
                            key={'danger'}
                            id={`dropdown-variants-danger`}
                            variant={'danger'}
                            title={levelOfDifficuilty || ''}
                        >
                            <Dropdown.Item eventKey="1" onClick={(e) => { setLevelOfDifficuilty('easy') }}>Easy</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2" onClick={(e) => { setLevelOfDifficuilty('medium') }}>Medium</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4" onClick={(e) => { setLevelOfDifficuilty('hard') }}>Hard</Dropdown.Item>
                        </DropdownButton>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>No of Questions</Form.Label>
                        <Form.Control type="number" onChange={(e) => setNoOfQuestions(e.target.value)} value={noOfQuestions || ''} style={{ border: '1px solid #CC0126' }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Passing Criteria</Form.Label>
                        <Form.Control type="number" onChange={(e) => setPassingCriteria(e.target.value)} value={passingCriteria || ''} style={{ border: '1px solid #CC0126' }} />
                    </Form.Group>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center" style={{ gap: '1rem' }}>
            <Button variant="secondary" onClick={() => setShowCreateEditModal(false)}>Close</Button>
            <Button onClick={handleSubmit} variant="danger">{contextMenuData?.id ? 'Update' : 'Create'}</Button>
        </Modal.Footer>
    </Modal>
}

export default CreateEditModal;