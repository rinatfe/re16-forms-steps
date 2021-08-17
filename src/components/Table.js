import {useState} from 'react';
import PropTypes from 'prop-types';
import keyIndex from'react-key-index';

function Table(props) {
    const {items, updateDate} = props;
    const [elem, setElem] = useState();
    

    return(
        <div className="data-container">
            <div className="data-label">
                <label>Дата</label>
                <label>Расстояние</label>
                <label>Действия</label>
            </div>
        {items.map(i=> {
           return <div key={i.id} id={i.id} className="item-container">
               <div className="date">{i.date}</div>
               <div className="distance">{i.distance}</div>
               <div className="button-container">
                   <button className="edit">🖉</button>
                   <button className="delete" onClick={()=> {updateDate(i.id)}}>✘</button>
               </div>
           </div>
        })}
        </div>
    );
};

Table.propTypes = {
    items: PropTypes.array,
    updateDate: PropTypes.func
  }

export default Table;