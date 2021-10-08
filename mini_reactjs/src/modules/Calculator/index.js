import React from 'react';
import styles from './styles.module.css'
import data from './buttonData';

const Calculator = props => {
  const date = new Date();
  const [time, setTime] = React.useState({
    hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
  })
  //default true = dark
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      setTime({
        hours: newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours(),
        minutes: newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes(),
      })
    }, 1000);
  }, [])

  return (
    <div className={`${styles.container}`}>
      <h3 style={{ textAlign: 'center' }}>Calculator system</h3>
      <div className={`${styles.calculator} ${styles[`calculator_${theme}`]}`}>
        <div className={`d-flex justify-content-between mx-4 my-2 ${styles.cal_top} ${styles[`cal_top_${theme}`]}`}>
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
          <div className={`${styles.switch} ${theme ? styles.switch_dark : styles.switch_light} py-1 px-1`}>
            <i class={`fas fa-moon ${theme ? styles.moon_dark : styles.moon_light} `}></i>
            <i class={`fas fa-sun ${theme ? styles.sun_dark : styles.sun_light}`}></i>
          </div>
          <div className={`${styles.display}`}>
            <div className={`${theme ? styles.display_calculation_dark : styles.display_calculation_light}`}>
              1200 X 2
            </div>
            <div className={`${theme ? styles.display_result_dark : styles.display_result_light}`} style={{ fontSize: 30 }}>
              2400
            </div>
          </div>
        </div>
        <div className={`${styles.cal_bottom}`}>
          {
            data.map((item, index) => {
              return (
                <div className={`flex-grow-1 ${styles.cal_bottom_item}`} key={index}>
                  {item.map((x, i) => {
                    return (
                      <button className={`mx-2 py-1 ${styles.buttonCover}`}>
                        <div style={{ color: x.color }} className={`py-2 ${styles.buttonCover}`}>
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