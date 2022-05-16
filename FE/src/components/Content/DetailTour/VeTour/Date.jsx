import { Box, Typography } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react';
import classes from "./Date.module.css";
import img from './borderblue.png';
import { useState } from 'react';
function DateTour({ day, setDay, setDayPopup, setPeoplePopup, setDayBook, GIATOUR }) {

  const handleDay = (day, position, dayBook) => {
    setDay({ day, position });
    setDayPopup(false);
    setPeoplePopup(true);
    setDayBook(dayBook);
  };
  return (
    <Box component={'div'}
      sx={{
        width: '672px',
        height: '522px',
        boxShadow: "0px 1px 2px rgb(3,18,26,0.2)",
        position: 'absolute',
        top: '55px',
        left: '0',
        borderRadius: '5px',
        backgroundColor: 'white',
        zIndex: '999',
        padding: '40px 16px',
        display: 'flex',
      }}
    >
      <Box component={'div'}
        sx={{
          width: '320px',
          height: '474px',
          padding: '0 15px'
        }}
      >
        <Box component={'div'} sx={{ fontWeight: '300', height: '41,6px' }}>
          Tháng 6 2022
        </Box>
        <Box component={'div'} sx={{ display: 'flex', marginTop: '7px', justifyContent: 'space-between' }}>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T2</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T3</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T4</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T5</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T6</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T7</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center', color: 'red' }}>CN</Typography>
        </Box>
        <Box component={'div'} sx={{ marginTop: '15px' }}>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <Typography variant="h6" display="block" className={classes.day}></Typography>
            <Typography variant="h6" display="block" className={classes.day}></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 1 tháng 06 2022', { x: '115px', y: '115px' }, '2022-06-01T00:00:00Z'); }} className={classes.day}>1<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 2 tháng 06 2022', { x: '157px', y: '115px' }, '2022-06-02T00:00:00Z'); }} className={classes.day}>2<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 3 tháng 06 2022', { x: '200px', y: '115px' }, '2022-06-03T00:00:00Z'); }} className={classes.day}>3<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 4 tháng 06 2022', { x: '243px', y: '115px' }, '2022-06-04T00:00:00Z'); }} className={classes.day}>4<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 5 tháng 06 2022', { x: '287px', y: '115px' }, '2022-06-05T00:00:00Z'); }} className={classes.dayCN}>5<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 6 tháng 06 2022', { x: '29px', y: '177px' }, '2022-06-06T00:00:00Z'); }} className={classes.day}>6<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 7 tháng 06 2022', { x: '72px', y: '177px' }, '2022-06-07T00:00:00Z'); }} className={classes.day}>7<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 8 tháng 06 2022', { x: '115px', y: '177px' }, '2022-06-08T00:00:00Z'); }} className={classes.day}>8<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 9 tháng 06 2022', { x: '157px', y: '177px' }, '2022-06-09T00:00:00Z'); }} className={classes.day}>9<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 10 tháng 06 2022', { x: '200px', y: '177px' }, '2022-06-10T00:00:00Z'); }} className={classes.day}>10<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 11 tháng 06 2022', { x: '243px', y: '177px' }, '2022-06-11T00:00:00Z'); }} className={classes.day}>11<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 12 tháng 06 2022', { x: '287px', y: '177px' }, '2022-06-12T00:00:00Z'); }} className={classes.dayCN}>12<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 13 tháng 06 2022', { x: '29px', y: '241px' }, '2022-06-13T00:00:00Z'); }} className={classes.day}>13<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 14 tháng 06 2022', { x: '72px', y: '241px' }, '2022-06-14T00:00:00Z'); }} className={classes.day}>14<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 15 tháng 06 2022', { x: '115px', y: '241px' }, '2022-06-15T00:00:00Z'); }} className={classes.day}>15<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 16 tháng 06 2022', { x: '157px', y: '241px' }, '2022-06-16T00:00:00Z'); }} className={classes.day}>16<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 17 tháng 06 2022', { x: '200px', y: '241px' }, '2022-06-17T00:00:00Z'); }} className={classes.day}>17<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 18 tháng 06 2022', { x: '243px', y: '241px' }, '2022-06-18T00:00:00Z'); }} className={classes.day}>18<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 19 tháng 06 2022', { x: '287px', y: '241px' }, '2022-06-19T00:00:00Z'); }} className={classes.dayCN}>19<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 20 tháng 06 2022', { x: '29px', y: '306px' }, '2022-06-20T00:00:00Z'); }} className={classes.day}>20<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 21 tháng 06 2022', { x: '72px', y: '306px' }, '2022-06-21T00:00:00Z'); }} className={classes.day}>21<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 22 tháng 06 2022', { x: '115px', y: '306px' }, '2022-06-22T00:00:00Z'); }} className={classes.day}>22<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 23 tháng 06 2022', { x: '157px', y: '306px' }, '2022-06-23T00:00:00Z'); }} className={classes.day}>23<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 24 tháng 06 2022', { x: '200px', y: '306px' }, '2022-06-24T00:00:00Z'); }} className={classes.day}>24<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 25 tháng 06 2022', { x: '243px', y: '306px' }, '2022-06-25T00:00:00Z'); }} className={classes.day}>25<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 26 tháng 06 2022', { x: '287px', y: '306px' }, '2022-06-26T00:00:00Z'); }} className={classes.dayCN}>26<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 27 tháng 06 2022', { x: '29px', y: '370px' }, '2022-06-27T00:00:00Z'); }} className={classes.day}>27<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 28 tháng 06 2022', { x: '72px', y: '370px' }, '2022-06-28T00:00:00Z'); }} className={classes.day}>28<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 29 tháng 06 2022', { x: '115px', y: '370px' }, '2022-06-29T00:00:00Z'); }} className={classes.day}>29<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 30 tháng 06 2022', { x: '157px', y: '370px' }, '2022-06-30T00:00:00Z'); }} className={classes.day}>30<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay(''); }} className={classes.day}></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay(''); }} className={classes.day}></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay(''); }} className={classes.day}></Typography>

          </Box>
        </Box>

      </Box>
      <Box component={'div'}
        sx={{
          width: '320px',
          height: '474px',
          padding: '0 15px'
        }}
      >
        <Box component={'div'} sx={{ fontWeight: '300', height: '41,6px' }}>
          Tháng 7 2022
        </Box>
        <Box component={'div'} sx={{ display: 'flex', marginTop: '7px', justifyContent: 'space-between' }}>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T2</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T3</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T4</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T5</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T6</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center' }}>T7</Typography>
          <Typography variant="overline" display="block" sx={{ width: '32px', textAlign: 'center', color: 'red' }}>CN</Typography>
        </Box>
        <Box component={'div'} sx={{ marginTop: '15px' }}>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay(''); }} className={classes.day}></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay(''); }} className={classes.day}></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay(''); }} className={classes.day}></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay(''); }} className={classes.day}></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 1 tháng 07 2022', { x: '520px', y: '113px' }, '2022-07-01T00:00:00Z'); }} className={classes.day}>1<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 2 tháng 07 2022', { x: '563px', y: '113px' }, '2022-07-02T00:00:00Z'); }} className={classes.day}>2<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 3 tháng 07 2022', { x: '606px', y: '113px' }, '2022-07-03T00:00:00Z'); }} className={classes.dayCN}>3<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 4 tháng 07 2022', { x: '348px', y: '177px' }, '2022-07-04T00:00:00Z'); }} className={classes.day}>4<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 5 tháng 07 2022', { x: '391px', y: '177px' }, '2022-07-05T00:00:00Z'); }} className={classes.day}>5<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 6 tháng 07 2022', { x: '435px', y: '177px' }, '2022-07-06T00:00:00Z'); }} className={classes.day}>6<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 7 tháng 07 2022', { x: '478px', y: '177px' }, '2022-07-07T00:00:00Z'); }} className={classes.day}>7<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 8 tháng 07 2022', { x: '520px', y: '177px' }, '2022-07-08T00:00:00Z'); }} className={classes.day}>8<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 9 tháng 07 2022', { x: '563px', y: '177px' }, '2022-07-09T00:00:00Z'); }} className={classes.day}>9<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 10 tháng 07 2022', { x: '606px', y: '177px' }, '2022-07-10T00:00:00Z'); }} className={classes.dayCN}>10<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 11 tháng 07 2022', { x: '348px', y: '241px' }, '2022-07-11T00:00:00Z'); }} className={classes.day}>11<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 12 tháng 07 2022', { x: '391px', y: '241px' }, '2022-07-12T00:00:00Z'); }} className={classes.day}>12<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 13 tháng 07 2022', { x: '435px', y: '241px' }, '2022-07-13T00:00:00Z'); }} className={classes.day}>13<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 14 tháng 07 2022', { x: '478px', y: '241px' }, '2022-07-14T00:00:00Z'); }} className={classes.day}>14<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 15 tháng 07 2022', { x: '520px', y: '241px' }, '2022-07-15T00:00:00Z'); }} className={classes.day}>15<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 16 tháng 07 2022', { x: '563px', y: '241px' }, '2022-07-16T00:00:00Z'); }} className={classes.day}>16<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 17 tháng 07 2022', { x: '606px', y: '241px' }, '2022-07-17T00:00:00Z'); }} className={classes.dayCN}>17<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 18 tháng 07 2022', { x: '348px', y: '306px' }, '2022-07-18T00:00:00Z'); }} className={classes.day}>18<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 19 tháng 07 2022', { x: '391px', y: '306px' }, '2022-07-19T00:00:00Z'); }} className={classes.day}>19<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 20 tháng 07 2022', { x: '435px', y: '306px' }, '2022-07-20T00:00:00Z'); }} className={classes.day}>20<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 21 tháng 07 2022', { x: '478px', y: '306px' }, '2022-07-21T00:00:00Z'); }} className={classes.day}>21<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 22 tháng 07 2022', { x: '520px', y: '306px' }, '2022-07-22T00:00:00Z'); }} className={classes.day}>22<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 23 tháng 07 2022', { x: '563px', y: '306px' }, '2022-07-23T00:00:00Z'); }} className={classes.day}>23<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 24 tháng 07 2022', { x: '606px', y: '306px' }, '2022-07-24T00:00:00Z'); }} className={classes.dayCN}>24<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
          </Box>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 2, 25 tháng 07 2022', { x: '348px', y: '370px' }, '2022-07-25T00:00:00Z'); }} className={classes.day}>25<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 3, 26 tháng 07 2022', { x: '391px', y: '370px' }, '2022-07-26T00:00:00Z'); }} className={classes.day}>26<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 4, 27 tháng 07 2022', { x: '435px', y: '370px' }, '2022-07-27T00:00:00Z'); }} className={classes.day}>27<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 5, 28 tháng 07 2022', { x: '478px', y: '370px' }, '2022-07-28T00:00:00Z'); }} className={classes.day}>28<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 6, 29 tháng 07 2022', { x: '520px', y: '370px' }, '2022-07-29T00:00:00Z'); }} className={classes.day}>29<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Thứ 7, 30 tháng 07 2022', { x: '563px', y: '370px' }, '2022-07-30T00:00:00Z'); }} className={classes.day}>30<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>
            <Typography variant="h6" display="block" onClick={() => { handleDay('Chủ nhật, 31 tháng 07 2022', { x: '606px', y: '370px' }, '2022-07-31T00:00:00Z'); }} className={classes.dayCN}>31<Typography variant="overline" display="block" className={classes.ten}>{`${ GIATOUR }`.slice(0, 3)}K</Typography></Typography>

          </Box>
        </Box>

      </Box>
      {(day.day != 'Chọn Ngày') && <Box component={'img'} src={img} sx={{
        position: 'absolute',
        top: day.position.y,
        left: day.position.x,
      }}></Box>}

    </Box>
  );
}

export default DateTour;