import AirDatepicker from 'air-datepicker';
import { isWithinInterval, isEqual } from 'date-fns';
import { createPopper } from '@popperjs/core';
import anime from 'animejs';

export function dataPicker() {
    console.log('dataPicker works');

    // Base

    // new AirDatepicker('.input', {
    //   // inline: true,
    //   // selectedDates: [new Date()],
    //   // view: 'months',
    //   // minView: 'months',
    //   // dateFormat: 'MMMM yyyy',
    //   // isMobile: true,
    //   // autoClose: true, // inline: false,
    //   // position: 'right center', // "'основная ось 'второстепенная ось'"
    //   // range: true, // диапазон дат
    //   // multipleDatesSeparator: ' - ', // диапазон дат
    //   // timepicker: true, // выбор времени
    //   // timeFormat: 'hh:mm AA',
    //   // minHours: 9,
    //   // maxHours: 18,
    //   // minutesStep: 5,
    //   // navTitles: {
    //   //   days: '<strong>yyyy</strong> <i>MMMM</i>',
    //   //   months: 'Select month of <strong>yyyy</strong>'
    //   // }, // обычный заголовок
    //   // navTitles: {
    //   //   days(dp) {
    //   //     if (dp.selectedDates.length) {
    //   //       let date = dp.selectedDates[0];
    //   //       return `<small>
    //   //              Вы выбрали  ${dp.formatDate(date, 'dd MMMM yyyy')}
    //   //           </small>`;
    //   //     }
    //   //     return 'Выберите дату';
    //   //   } // динамический заголовок
    //   // },
    //   // buttons: ['today', 'clear'],
    //   //   buttons: [
    //   //     {
    //   //         content(dp) {
    //   //             return dp.opts.timepicker 
    //   //                 ? 'Выключить выбор времени'
    //   //                 : 'Включить выбор времени'
    //   //         },
    //   //         onClick(dp) {
    //   //             let viewDate = dp.viewDate;
    //   //             let today = new Date();
    //   //             // Since timepicker takes initial time from 'viewDate', set up time here, 
    //   //             // otherwise time will be equal to 00:00 if user navigated through datepicker
    //   //             viewDate.setHours(today.getHours());
    //   //             viewDate.setMinutes(today.getMinutes());
    //   //             dp.update({
    //   //                 timepicker: !dp.opts.timepicker,
    //   //                 viewDate
    //   //             })
    //   //         }
    //   //     }
    //   // ]
    // })

    // Disabled Date

    // const disabledDate = new Date('2023-07-13T00:00:00');

    // const isDisabledDateIsInRange = ({ date, datepicker }) => {
    //     const selectedDate = datepicker.selectedDates[0];
    //     if (selectedDate && datepicker.selectedDates.length === 1) {
    //         const sortedDates = [selectedDate, date].toSorted((a, b) => {
    //             if (a.getTime() > b.getTime()) {
    //                 return 1;
    //             }
    //             return -1;
    //         })

    //         return (isWithinInterval(disabledDate, {
    //             start: sortedDates[0],
    //             end: sortedDates[1]
    //         }))
    //     }
    // }

    // new AirDatepicker('.input', {
    //     startDate: '2023-07-19',
    //     range: true,
    //     onBeforeSelect: ({ date, datepicker }) => {
    //         // Не даем выбрать дату, если недопустимая дата в диапазоне
    //         return !isDisabledDateIsInRange({ date, datepicker });
    //     },
    //     onFocus: ({ date, datepicker }) => {
    //         if (isDisabledDateIsInRange({ date, datepicker }) || isEqual(date, disabledDate)) {
    //             datepicker.$datepicker.classList.add('-disabled-range-')
    //         } else {
    //             datepicker.$datepicker.classList.remove('-disabled-range-')
    //         }
    //     },
    //     onRenderCell: ({ date }) => {
    //         if (date.toLocaleDateString() === disabledDate.toLocaleDateString()) {
    //             return {
    //                 disabled: true
    //             }
    //         }
    //     }
    // })

    // With animation

    // new AirDatepicker('.input', {
    //   position({ $datepicker, $target, $pointer, isViewChange, done }) {
    //     let popper = createPopper($target, $datepicker, {
    //       placement: 'bottom',
    //       onFirstUpdate: state => {
    //         !isViewChange && anime.remove($datepicker);

    //         $datepicker.style.transformOrigin = 'center top';

    //         !isViewChange && anime({
    //           targets: $datepicker,
    //           opacity: [0, 1],
    //           rotateX: [-90, 0],
    //           easing: 'spring(1.3, 80, 5, 0)',
    //         })

    //       },
    //       modifiers: [
    //         {
    //           name: 'offset',
    //           options: {
    //             offset: [0, 10]
    //           }
    //         },
    //         {
    //           name: 'arrow',
    //           options: {
    //             element: $pointer,
    //           }
    //         },
    //         {
    //           name: 'computeStyles',
    //           options: {
    //             gpuAcceleration: false,
    //           },
    //         },
    //       ]
    //     });

    //     return () => {
    //       anime({
    //         targets: $datepicker,
    //         opacity: 0,
    //         rotateX: -90,
    //         duration: 300,
    //         easing: 'easeOutCubic'
    //       }).finished.then(() => {
    //         popper.destroy();
    //         done();
    //       })
    //     }
    //   }
    // } 
    // ) 

    // Min & Max date

    // let dpMin, dpMax;

    // dpMin = new AirDatepicker('.input1', {
    //     onSelect({ date }) {
    //         dpMax.update({
    //             minDate: date
    //         })
    //     }
    // })

    // dpMax = new AirDatepicker('.input2', {
    //     onSelect({ date }) {
    //         dpMin.update({
    //             maxDate: date
    //         })
    //     }
    // })
}


