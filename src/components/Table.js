import {useState} from 'react';
import PropTypes from 'prop-types'

function Table(props) {
    const {items, updateDate} = props;
    const [elem, setElem] = useState();

    const deleteItem = evt => {
        updateDate(evt.target.closest(".item-container").firstElementChild.textContent);
    }

    return(
        <div className="data-container">
            <div className="data-label">
                <label>Дата</label>
                <label>Расстояние</label>
                <label>Действия</label>
            </div>
        {items.map(i=> {
           return <div  key={items.indexOf(i)} className="item-container">
               <div className="date">{i.date}</div>
               <div className="distance">{i.distance}</div>
               <div className="button-container">
                   <button className="edit">🖉</button>
                   <button className="delete" onClick={deleteItem}>✘</button>
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