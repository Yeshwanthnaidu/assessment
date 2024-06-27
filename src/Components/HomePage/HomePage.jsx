import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { Table as BTable } from 'react-bootstrap'
import { CiMemoPad } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { setAssessmentData } from '../../Store/reducer';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css'
import CreateEditModal from "../Modals/CreateEditModal";

const HomePage = () => {
    const dispatch = useDispatch();
    const [showCreateEditModal, setShowCreateEditModal] = useState(false);
    const [contextMenuData, setContextMenuData] = useState(null);

    const data = useSelector((state) => state.assessment_data);
    const setData = (data) => {
        dispatch(setAssessmentData(data));
    }

    const handleContextMenu = (e, row) => {
        e.preventDefault();
        setContextMenuData(row);
    };

    const handleDelete = () => {
        const tempData = data.filter(d => d.id !== contextMenuData?.id);
        setData(tempData)
        setContextMenuData(null)
    }

    const handleSetData = (modalData) => {
        if (!modalData.id) {
            modalData.id = uuidv4();
            setData([...data, modalData])
        } else {
            const tempData = data.map(row => {
                if (row.id === modalData.id) {
                    return modalData
                }
                return row
            })

            setData(tempData)
        }
    }

    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor('checkbox', {
            id: "checkbox",
            header: () => '',
            cell: info => <input type='checkbox' />,
        }),
        columnHelper.accessor('name', {
            header: () => <span>Name</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('active', {
            id: "active",
            header: () => <span>Active</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('description', {
            header: () => <span>Description</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('topic_document', {
            header: () => <span>Topic Document</span>,
            cell: info => info.getValue().path,
        }),
        columnHelper.accessor('level_of_difficulty', {
            header: () => <span>Level of Difficuilty</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('no_of_questions', {
            header: () => <span>No of Questions</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('passing_criteria', {
            header: () => <span>Passing Criteria</span>,
            cell: info => info.getValue(),
        }),
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleEditClick = (e) => {
        setShowCreateEditModal(true);
    }

    const downloadFile = () => {
        if (contextMenuData?.id?.includes('random')) return alert('THIS IS TEMP ROW')
        const url = URL.createObjectURL(contextMenuData?.topic_document)
        const a = document.createElement('a');
        a.href = url;
        a.download = contextMenuData?.topic_document?.path;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Revoke the object URL to free up memory
        URL.revokeObjectURL(url);
    }

    const minWidthColumns = ['active', 'checkbox'];

    return <React.Fragment>
        <div className="main-container d-flex flex-column align-items-center">
            <div className="d-flex justify-content-between w-75">
                <button className="create-assessment-btn d-flex align-items-center" style={{ gap: '1rem' }} onClick={() => { setContextMenuData(null); setShowCreateEditModal(true) }}>
                    <CiMemoPad size={'2rem'} />
                    <span>Create Assessment</span>
                </button>
                <button className="create-assessment-btn d-flex align-items-center" style={{ gap: '1rem' }}>
                    <FaFilter size={'1.3rem'} />
                    <span>Filter</span>
                </button>
            </div>
            <div className="table-container w-75">
                <BTable borderless hover responsive size="md" className='custom-table'>
                    <thead className="sticky-header" style={{ borderBottom: '1px solid grey' }}>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="cursor-pointer">
                                {headerGroup.headers.map((header, index) => (
                                    <>
                                        <th className="py-3" style={{ borderRight: index !== headerGroup.headers.length - 1 ? '1px solid grey' : '', width: minWidthColumns.includes(header.column.id) ? '5rem' : '', borderRadius: index == 0 ? '2rem 0rem 0rem 0rem' : index === headerGroup.headers.length - 1 ? '0rem 2rem 0rem 0rem' : '' }} key={header.id}>
                                            {console.log(header)}
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    </>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody style={{ overflowY: 'scroll' }}>
                        {table.getRowModel().rows.map(row => (
                            <ContextMenuTrigger id="same_unique_identifier">
                                <tr key={row.id} id={row.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }} onContextMenu={(e) => handleContextMenu(e, row.original)}>
                                    {row.getVisibleCells().map((cell, index) => {
                                        { console.log("cell =>", cell) }
                                        return <td key={cell.id} className="py-3" style={{ width: minWidthColumns.includes(cell.column.id) ? '5rem' : '', }}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    })}
                                </tr>
                            </ContextMenuTrigger>
                        ))}
                    </tbody>
                </BTable>
                <ContextMenu id="same_unique_identifier" className="context-menu">
                    <MenuItem className="menu-item" onClick={(e) => { handleEditClick() }}>
                        <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                            <MdEdit size={'1.5rem'} />
                            <span>Edit</span>
                        </div>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem className="menu-item" onClick={() => { handleDelete() }}>
                        <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                            <MdDelete size={'1.5rem'} />
                            <span>Delete</span>
                        </div>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem className="menu-item" onClick={() => { downloadFile() }}>
                        <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                            <IoMdDownload size={'1.5rem'} />
                            <span>Download Questions</span>
                        </div>
                    </MenuItem>
                </ContextMenu>
            </div>
        </div>
        {showCreateEditModal && <CreateEditModal handleSetData={handleSetData} contextMenuData={contextMenuData} setShowCreateEditModal={setShowCreateEditModal} />}
    </React.Fragment>
}

export default HomePage