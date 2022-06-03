// import {FixedSizeList as List} from 'react-window';
import {FixedSizeGrid as Grid} from 'react-window';
import {Fragment, useState} from 'react';

const Row = ({index, style}: { index: number, style: any }) => {
  console.log(index, style);
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
    </div>
  )
};

const Cell = (props: { columnIndex: number, rowIndex: number, style: any }) => {
  console.log(props, props.columnIndex, props.rowIndex, props.style);
  return (
    <div style={props.style}>
      Item {props.rowIndex},{props.columnIndex}
    </div>
  )
};
const ReactWindow: React.FC = () => {
  const [data, setData] = useState(10);
  const [rowCount, setRowCount] = useState(10);
  return (
    <Fragment>
      {data}
      <button className='btn' onClick={() => {
        setRowCount(999)
      }}>aaa
      </button>
      {/*<List*/}
      {/*  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}*/}
      {/*  className="list"*/}
      {/*  width={300}*/}
      {/*  height={600}*/}
      {/*  itemCount={10}*/}
      {/*  itemSize={30}*/}
      {/*>*/}
      {/*    { Row }*/}
      {/*</List>*/}
      <Grid
        columnCount={4}
        columnWidth={100}
        height={150}
        rowCount={rowCount}
        rowHeight={35}
        width={500}

      >
        {
          (props: { columnIndex: number, rowIndex: number, style: any }) => {
            console.log(props.columnIndex, props.rowIndex, props.style);
            if (props.columnIndex === 3 && props.rowIndex === 9) {
              setData(100);
            }
            return (
              <div style={props.style}>
                Item {props.rowIndex},{props.columnIndex}
              </div>
            )
          }
        }
      </Grid>
      <img src={'https://www.baidu.com/img/bd_logo1.png'}/>
    </Fragment>
  );
};
ReactWindow.displayName = 'Rxjs';
export default ReactWindow

