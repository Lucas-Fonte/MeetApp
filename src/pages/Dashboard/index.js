/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { setHours, setMinutes, setSeconds, isBefore, isEqual, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronRight } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

import api from '~/services/api';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
    const [schedule, setSchedule ] = useState([]);

    useEffect(() => {
        async function loadSchedule(){
                const response = await api.get('schedule', {
                    params: { date }
                });
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const data = range.map(hour => {
                    const checkDate = setSeconds(setMinutes(setHours(date, hour), 0),0);
                    const compareDate = utcToZonedTime(checkDate, timezone);

                    return {
                        time: `${hour}:00h`,
                        past: isBefore(compareDate, new Date()),
                        appointment: response.data.find(a =>
                            isEqual(parseISO(a.date), compareDate),
                        )
                    };
                });

                setSchedule(data);
            }

            // loadSchedule();
        // },[date]);
        },[]);

    return (
        <Container>
            <header>
                <strong>Meus Meetups</strong>
                    <aside>
                       <button type="button">
                            <FaPlus size={12} color="#fff" />
                            <span>Novo Meetup</span>
                       </button>
                    </aside>
            </header>

            <ul>
                { schedule.map(time => (
                    <Time key={time.time} past={time.past}>
                        <strong>Meetup de React Native</strong>
                        <aside>
                            <span>
                                24 de Junho, às
                                {time.time}
                            </span>
                            <button type="button">
                                <MdChevronRight size={24} color="#fff" />
                            </button>
                        </aside>
                    </Time>
                ))}
                <Time>
                    <strong>NodeJS Meetup</strong>
                    <aside>
                       <span>17 de Junho, às 15h</span>
                       <button type="button">
                            <MdChevronRight size={24} color="#FFF" />
                       </button>
                    </aside>
                </Time>
            </ul>
        </Container>
    );
}
