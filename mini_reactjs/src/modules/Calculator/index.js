import React from 'react';
import styles from './styles.module.css'
import data from './buttonData';

const Calculator = props => {
  const date = new Date();
  const timing = React.useRef(0);
  const [time, setTime] = React.useState({
    hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
  })
  const [theme, setTheme] = React.useState('dark');
  const [calculate, setCalculate] = React.useState({
    display: 0,
    save: 0,
  });
  const [result, setResult] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      if (newDate.getMinutes() === timing.current) return;
      timing.current = newDate.getMinutes();
      setTime({
        hours: newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours(),
        minutes: newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes(),
      })
    }, 1000);
  }, [])

  const operators = (value) => {
    const last = value[value.length - 1];
    switch (last) {
      case '+':
        return true;
      case '-':
        return true;
      case 'x':
        return true;
      case '/':
        return true;
      default:
        return false;
    }
  }

  const calculation = (value) => {
    const { display, save } = calculate;
    const lastIndex = typeof display === 'string' && operators(display);
    console.log("🚀 ~ file: index.js ~ line 50 ~ calculation ~ lastIndex", lastIndex)
    switch (value) {
      case '=':
        if (lastIndex) {
          break;
        }
        console.log(save)
        const rs = eval(save);
        setResult(rs);
        break;
      case '+':
        if (lastIndex) {
          setCalculate({
            display: display.slice(0, display.length - 1) + value,
            save: display.slice(0, display.length - 1) + value,
          })
          break;
        }
        if (!display) {
          setCalculate({ display: display + value, save: display + value })
          break;
        }
        setCalculate({ display: display + value, save: display + value })
        break;
      case '-':
        if (lastIndex) {
          setCalculate({
            display: display.slice(0, display.length - 1) + value,
            save: display.slice(0, display.length - 1) + value,
          })
          break;
        }
        if (!display) {
          setCalculate({ display: value, save: value })
          break;
        }
        setCalculate({ display: display + value, save: display + value })
        break;
      case 'x':
        if (lastIndex) {
          setCalculate({
            display: display.slice(0, display.length - 1) + value,
            save: display.slice(0, display.length - 1) + '*',
          })
          break;
        }
        if (!value)
          if (!display) {
            setCalculate({ display: display + value, save: display + '*' })
          }
        setCalculate({ display: display + value, save: display + '*' })
        break;
      case '/':
        if (lastIndex) {
          setCalculate({
            display: display.slice(0, display.length - 1) + value,
            save: display.slice(0, display.length - 1) + value,
          })
          break;
        }
        if (!display) {
          setCalculate({ display: display + value, save: display + value })
        }
        setCalculate({ display: display + value, save: display + value })
        break;
      case 'AC':
        setCalculate({ display: 0 })
        setResult(0)
        break;
      default:
        if (!calculate.display && !value) break;
        if (!calculate.display) {
          setCalculate({ display: value, save: value })
        } else {
          setCalculate(pre => ({ ...pre, display: display + '' + value, save: save + '' + value }))
        }

    }
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`mt-3 ${styles.calculator} ${styles['calculator_' + theme]}`}>
        <div className={`d-flex justify-content-between mx-4 my-2 ${styles.cal_top} ${styles['cal_top_' + theme]}`}>
          <div>
            {`${time.hours}:${time.minutes}`}
          </div>
          <div>
            <i className="fas fa-signal"></i>
            <i className="mx-1 fas fa-wifi"></i>
            <i className={`fas fa-battery-full ${styles.battery}`}></i>
          </div>
        </div>
        <div className={`${styles.cal_mid}`}>
          <div className={`${styles.switch} ${styles['switch_' + theme]} py-1 px-1`}>
            <i style={{ cursor: 'pointer' }} onClick={() => setTheme('dark')} className={`fas fa-moon ${styles['moon_' + theme]} `}></i>
            <i style={{ cursor: 'pointer' }} onClick={() => setTheme('light')} className={`fas fa-sun ${styles['sun_' + theme]}`}></i>
          </div>
          <div className={`m-2 ${styles.display} ${styles['display_' + theme]}`}>
            <div className={`${styles['display_calculation_' + theme]}`}>
              {calculate.display}
            </div>
            <div className={`${styles['display_result_' + theme]}`} style={{ fontSize: 30 }}>
              {result}
            </div>
          </div>
        </div>
        <div className={`${styles.cal_bottom} ${styles['cal_bottom_' + theme]}`}>
          {
            data.map((item, index) => {
              return (
                <div className={`flex-grow-1 ${styles.cal_bottom_item}`} key={index}>
                  {item.map((x, i) => {
                    return (
                      <button onClick={() => calculation(x.number)} key={i} className={`mx-2 py-1 ${styles.buttonCover} ${styles['buttonCover_' + theme]}`}>
                        <div style={{ color: x[theme] }} className={`py-2 ${styles.buttonCover}`}>
                          {x.number}
                        </div>
                      </button>
                    )
                  })}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Calculator;