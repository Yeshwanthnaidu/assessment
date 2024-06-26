import React, { useState } from "react";
import './TestPage.css'
import { Dropdown, Form, DropdownButton, ButtonGroup, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTopic } from '../../Store/reducer'
import { useNavigate } from "react-router-dom";

const TestPage = () => {
    const testTopics = useSelector(state => state.assessment_data);
    const selectedTopic = useSelector(state => state.selected_topic);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <div>
        <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Label className="fs-2 py-3">Choose Test Topic</Form.Label>
            <DropdownButton
                as={ButtonGroup}
                key={'danger'}
                id={`dropdown-variants-danger`}
                variant={'danger'}
                title={selectedTopic?.name || 'Choose a Assessment Topic'}
                className="w-50 menu-items p-2"
            >
                <div style={{ height: '20rem', overflowY: 'scroll' }}>
                    {testTopics.map(topic => {
                        return <>
                            <Dropdown.Item eventKey="1" onClick={(e) => { dispatch(setSelectedTopic(topic)) }}>{topic?.name || topic?.description || ''}</Dropdown.Item>
                            <Dropdown.Divider />
                        </>
                    })}
                </div>
            </DropdownButton>
        </Form.Group>
        <Button variant="danger p-3" onClick={() => { selectedTopic?.name ? navigate('/mcqs') : alert('Choose Topic')}}>Start Assessment</Button>
    </div >
}

export default TestPage