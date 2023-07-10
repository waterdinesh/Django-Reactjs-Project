import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { discover } from '../../Data.js';
import { SiInstagram } from "react-icons/si";
import "./teacherview.css"

const TeacherView = () => {
    const [items, setItems] = useState(discover)
    const { id } = useParams()
    console.log(items)

    return (
        <div>
            {items.filter((item) => {
                return item.id === Number(id)
            }).map((val) => {
                console.log(val.title)
                return (
                    <div className="allview">
                        <section className="viewleft">

                            <div className="viewleftimg">
                                <img src={val.cover} alt="" />
                            </div>

                        </section>
                        <section className="viewright">
                            <h1>{val.title}</h1>
                            <h4>Crossfit, Core</h4>
                            <h5 style={{ fontSize: "50px" }}><SiInstagram /></h5>
                            <p>Highly educated and skilled health sciences professional
                                specializing in athletic health care.
                                He works with coaches, doctors, and physical therapists. On a typical day,
                                the roles and
                                responsibilities of an athletic trainer include: Providing
                                athletic training services.</p>
                        </section>
                    </div>
                )
            })}
        </div>
    )
}

export default TeacherView;
