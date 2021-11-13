import React, { Component, useCallback, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './DocumentsPage.module.css'
import { connect } from 'react-redux';
import { docx4js } from 'docx4js';
import 'react-dropdown/style.css';
import {useDropzone} from 'react-dropzone'
import Modal from 'react-modal';

let flag = false

const customStyles = {
    content: {
      top: 70,
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: 0,
      width: 650,
      color: '#4E9B33',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: 12,
      textAlign: 'center'
    },
  };

//   Modal.setAppElement('#yourAppElement');

const Documents = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const fileArr = []
    const [info, setInfo] = useState(false)

    function openModal() {
        setIsOpen(true);
        flag = false
    }

    function afterOpenModal() {
        flag = false
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    const onDrop = useCallback(acceptedFiles => {
        function test(input){
            const file= input[0]
            const type=({
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx"
            })[file.type];
            const module=require("docx4js")[type]
            module.load(file).then(function(doc){
                    doc.render((type, props, children) => {
                        children.forEach(child => {
                            fileArr.push(child)
                            fileArr.join('')
                        })
                    })
                    createObj()
                    flag = true
            })
        }
        test(acceptedFiles)

      }, [])

    const {getRootProps, getInputProps} = useDropzone({onDrop})
    
    const createObj = () => {
        let obj = {}
        obj = {
            'type': 'ward',
            'receiver': 'Егор Овчинников',
            'sennder': 'Степанов Матвей',
            'count': 4
        }
        setInfo(() => true )
        console.log(info);
    }
    

    return (
        <div className={s.flex}>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h1>Данные отправлены</h1>
            </Modal>
            <div>
            <div {...getRootProps()} className={s.dropzone}>
                <input {...getInputProps()} />
                <img src="./icons/add-circle.svg"/>
            </div>
            {flag ? <button className={s.btn} onClick={openModal}>Отправить</button> : null}
            </div>
            {flag ?
             <div className={s.info}>
                <p>Тип акта: магазин-волнтер</p>
                <h3>Получатель</h3>
                <p>Егор Овчинников</p>
                <h3>Адресант</h3>
                <p>Анна Андреева</p>
                <p>8кг</p>
            </div>
            : null}
           
        </div>
    )
}

class DocumentsPageAPI extends Component {
    render() {
        return (
           <div>
            <h2 className={'h2'}>Загрузка Акта</h2>
            <Documents/>
            <h2 className={'h2'}>Недавно загруженные</h2>
            <div className={s.docWrapper}>
                <div className={s.docCard}>
                    <div className={s.docblock}>
                        <img src="./icons/word.svg"/>
                    </div>
                    <p className="p">Пятерочка</p>
                    <p className="mute">Ул.Карякина 7</p>
                    <p className="p">25.02.2021 21:20</p>
                </div>
                <div className={s.docCard}>
                    <div className={s.docblock}>
                        <img src="./icons/word.svg"/>
                    </div>
                    <p className="p">Пятерочка</p>
                    <p className="mute">Ул.Карякина 7</p>
                    <p className="p">25.02.2021 21:20</p>
                </div>
                <div className={s.docCard}>
                    <div className={s.docblock}>
                        <img src="./icons/word.svg"/>
                    </div>
                    <p className="p">Пятерочка</p>
                    <p className="mute">Ул.Карякина 7</p>
                    <p className="p">25.02.2021 21:20</p>
                </div>
            </div>
           </div>
        )
    }
}

const DocumentsPage = connect(null, null)(DocumentsPageAPI)

export default DocumentsPage