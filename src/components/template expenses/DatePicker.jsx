import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function Calendar() {

    const [date,setDate] = React.useState(dayjs())
    const handleChange =(newDate)=>{
        setDate(newDate);
        console.log(date);
    }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <form>
            
            <DemoItem label={'Please select a date'}>
          <DatePicker views={['month','year']} openTo="month" defaultValue={dayjs()}
                onChange={handleChange} />
        </DemoItem>
        </form>
      </DemoContainer>
    </LocalizationProvider>
  );
}
