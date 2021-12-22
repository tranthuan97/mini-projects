import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'bootstrap';
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const Colorfull = props => {
  const [colorsList, setColorsList] = React.useState([])
  const index = colorsList.length > 0 ? colorsList.length - 1 : 0;
  const count = React.useRef(index)
  const maxItemsSameTime = 3;

  const checkIsMaxColors = (list, colorIndex) => {
    // Đảo ngược và tìm [max] màu gần nhất cùng dãy màu
    const maxItem = [...list].reverse().splice(0, maxItemsSameTime);
    const isMaxCurrentColors = maxItem.length === maxItemsSameTime && maxItem.every(x => x === colors[colorIndex]);
    
    return isMaxCurrentColors;
  }

  const addColorToList = () => {

    const list = [...colorsList];

    // trả lại 0 nếu vượt quá số yêu cầu
    if (count.current > colors.length - 1) count.current = 0;

    list.push(colors[count.current]);

    // kiểm tra nếu tối đa dãy màu được thêm vào cuối mảng
    if (checkIsMaxColors(list, count.current)) {
      count.current++;
    }

    // lưu state và lưu localStorage
    setColorsList(list);
    localStorage.setItem('colorsList', JSON.stringify(list));
  }

  const clearAllColors = () => {
    setColorsList([]);
    localStorage.removeItem('colorsList');
  }

  React.useEffect(() => {
    const local = localStorage.getItem('colorsList');
    if (local) {
      const list = JSON.parse(local);
      const colorIndex = colors.indexOf(Array.from(list).slice(-1)[0]);
      const isMax = checkIsMaxColors(list, colorIndex);
      count.current = isMax ? colorIndex + 1 : colorIndex;
      setColorsList(list);
    }
  }, [])

  return (
    <div className='m-2'>
      <div>Mảng màu:
        <div>
          {colors.map((x, i) => {
            return <Button key={i} style={{ background: x }}>{x}</Button>
          })}
        </div>
      </div>
      <div className='my-2'>
        <Button className='mr-2' onClick={addColorToList}>Thêm màu vào mảng</Button>
        <Button className='mr-2' onClick={clearAllColors}>Xóa tất cả màu khỏi mảng</Button>
      </div>
      <div className='my-2'>
        <div>Danh sách mảng màu được thêm vào: </div>
        <div>
          {colorsList.map((x, i) => {
            return <div key={i} className='m-2' style={{ display: 'inline-block', background: x, width: 100, height: 50, padding: 10 }}>{x}</div>
          })}
        </div>
      </div>
    </div>
  )
};

Colorfull.propTypes = {
  
};

export default Colorfull;