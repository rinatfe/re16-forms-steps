import {useRef, useState} from 'react';
import Table from './Table';

function GetValue(){
    const dateRef = useRef();
    const distRef = useRef();
    const [data, setData] = useState({arr: []});
    const sortFunction = function (a,b){  
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA < dateB ? 1 : -1;  
    };
    const collectDate = evt => {
        evt.preventDefault();
        if(data.arr.some(i=> i.date == dateRef.current.value)) {
            let index = data.arr.findIndex(i=> i.date == dateRef.current.value);
            let count = data.arr;
            count[index].distance = count[index].distance + Number(distRef.current.value);
            setData({ arr: count});
         } else {
        let joined = data.arr.concat({date: dateRef.current.value, distance:Number(distRef.current.value)});
        let sortingArr = joined.sort(sortFunction);
        setData({ arr: sortingArr });
        }
         dateRef.current.value = "";
         distRef.current.value = "";
    };

    const updateDate = value => {
        let index = data.arr.findIndex(i=> i.date == value);
        data.arr.splice(index, 1);
        let deleteElem = data.arr;
        setData({arr: deleteElem});
    }

    return(
       <div className="container">
            <div className="input-container">
                <div className="data-box">
                    <label className="label-date">Дата</label>
                    <input className="date-input" ref={dateRef} type="date"></input>
                </div>
                <div className="dist-box">
                    <label className="label-dist">Расстояние км.</label>    
                    <input className="distance-input" ref={distRef}></input>
                </div>    
                <button className="transfer-data" onClick={collectDate}>OK</button>
            </div>
            <Table items={data.arr} updateDate={updateDate} />
        </div>  
    );
}

export default GetValue;