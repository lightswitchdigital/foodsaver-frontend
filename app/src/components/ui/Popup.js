import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const UiPopup = ({children, trigger}) => (
  <Popup trigger={trigger} on='click' position='bottom center'>
    <div className="popupUi">
        <h4>Организация</h4>
        <Dropdown className='myClassName' options={['Пятерочка', 'Магнит', 'Перекресток']}/>
        <input type='text' placeholder="точное время"/>
    </div>
  </Popup>
)

export default UiPopup