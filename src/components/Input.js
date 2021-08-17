import {useRef, useState} from 'react';
import Table from './Table';
import nextId from "react-id-generator";

function GetValue(){
    const [htmlId] = nextId();
    const [dist, setDist] = useState();
    const [date, setDate] = useState();
    const [data, setData] = useState({arr: []});


    const sortFunction = function (a,b){  
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA < dateB ? 1 : -1;  
    };

    const saveDistance = evt => {
        setDist(`${evt.target.value}`);
    }

    const saveDate = evt => {
        setDate(`${evt.target.value}`);
    }

    const collectDate = evt => {
        evt.preventDefault();
        if(data.arr.some(i=> i.date == date)) {
            let index = data.arr.findIndex(i=> i.date == date);
            let count = data.arr;
            count[index].distance = count[index].distance + Number(dist);
            setData({ arr: count});
         } else {
            let joined = data.arr.concat({date: date, distance:Number(dist), id:htmlId});
            let sortingArr = joined.sort(sortFunction);
            setData({ arr: sortingArr });
        }
        
    };

    const updateDate = value => {
        let index = data.arr.findIndex(i=> i.id == value);
        data.arr.splice(index, 1);
        let deleteElem = data.arr;
        setData({arr: deleteElem});
    }

    return(
       <div className="container">
            <div className="input-container">
                <div className="data-box">
                    <label className="label-date">Дата</label>
                    <input className="date-input"  type="date" onChange={saveDate}></input>
                </div>
                <div className="dist-box">
                    <label className="label-dist">Расстояние км.</label>    
                    <input className="distance-input" onChange={saveDistance}></input>
                </div>    
                <button className="transfer-data" onClick={collectDate}>OK</button>
            </div>
            <Table items={data.arr} updateDate={updateDate} />
        </div>  
    );
}

export default GetValue;