import React, { Component, useCallback, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './DocumentsPage.module.css'
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { docx4js } from 'docx4js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useDropzone} from 'react-dropzone'

const Documents = (props) => {
    const [fileArr, setFileArr] = useState([])
    const [flag, setFlag] = useState(false)

    const onSubmit = data => {
        function test(input){
			const file= input[0]
            let arr = [];
			const type=({
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx"
			})[file.type];
			const module=require("docx4js")[type]
			module.load(file)
				.then(function(doc){
					input.value=""
					const element=doc.render((type, props, children)=>{
                        children.forEach(child => {
                            setFileArr(oldArray => [...oldArray, child])
                        })
					})
				})
		}
        test(data)
    }

    const onDrop = useCallback(acceptedFiles => {
        onSubmit(acceptedFiles)
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const fintElem = (text, num = 0) => {
        fileArr.filter(function(val) {return val.indexOf(text)})
        fileArr.filter(val => {return fileArr[val.indexOf(text) + num]})
    }

    const createObj = () => {
        let obj = {}
        if(fileArr.filter(function(val) {return val.indexOf('Акт приема-передачи продовольственных товаров') !== -1})){
            obj = {
                'type': 'ward',
                'receiver': fileArr[fintElem('в дальнейшем «Жертвователь»') - 3],
                'sennder': fileArr[fintElem('в дальнейшем «Одаряемый»') - 3]
            }
        }
        console.log(obj);
        setFlag(true)
    }

    return (
        <div>
            <h2 className={'h2'}>Загрузка Акта</h2>
            <div {...getRootProps()} className={s.dropzone}>
                <input {...getInputProps()} />
                <img src="./icons/add-circle.svg"/>
                {(fileArr.length > 0 && !flag)&&  createObj()}
            </div>
        </div>
    )
}

class DocumentsPageAPI extends Component {
    render() {
        return (
           <div>
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